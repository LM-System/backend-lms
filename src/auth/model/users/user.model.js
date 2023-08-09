"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = (sequelize, DataTypes) => {
  const model = sequelize.define("users", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM(
        "superAdmin",
        "institutionHead",
        "instructor",
        "student",
        "departmentHead"
      ),
      defaultValue: "student",
    },
    institution_id: {
      type: DataTypes.INTEGER,
    },
    department_id: {
      type: DataTypes.INTEGER,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ email: this.email}, process.env.SECRET);
      },
      set(tokenObj) {
        let token = jwt.sign(tokenObj, process.env.SECRET);
        return token;
      },
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  model.authUser = async (email, password) => {
    const user = await model.findOne({ where: { email: email } ,include:{all:true}});
    if (user) {
      const validuser = await bcrypt.compare(password, user.password);
      if (validuser) {
        return user;
      } else {
        throw new Error("Invalid credentials");
      }
    } else {
      throw new Error("User not found");
    }
  };
  model.bearerToken = async (token) => {
    try {
      const userToken = jwt.verify(token, process.env.SECRET);
      if (userToken) {
        const record = await model.findOne({
          where: { email: userToken.email },
        });
        return record;
      }
    } catch (err) {
      throw new Error(err || "Invalid Token");
    }
  };
  return model;
};

module.exports = users;
