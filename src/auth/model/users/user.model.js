"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = (sequelize, DataTypes) => {
  const model = sequelize.define("users", {
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(
        "student",
        "instructor",
        "instructorDepartmentHead",
        "admin",
        "superAdmin",
      ),
      defaultValue: "student",
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ email: this.email,role:this.role}, process.env.SECRET);
      },
      set(tokenObj) {
        let token = jwt.sign(tokenObj, process.env.SECRET);
        return token;
      },
    },

  });
  model.authUser = async (email, password) => {
    const user = await model.findOne({ where: { email: email } });
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
