"use strict";

const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/user-route");

const SECRET = process.env.SECRET;

const Users = (sequelize, DataTypes) => {
  const model = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      type: DataTypes.STRING,
    },
    date_birth: {
      type: DataTypes.DATE,
    },

    bio: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("student", "admin", "teacher"),
      required: true,
      defaultValue: "student",
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          student: ["read"],
          teacher: ["read", "create", "update"],
          admin: ["read", "create", "update", "delete"],
        };
        return acl[this.role];
      },
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, SECRET);
      },
      set(tokenObj) {
        let token = jwt.sign(tokenObj, SECRET);
        return token;
      },
    },
  });
  model.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });
  model.authUser = async (username, password) => {
    const user = await model.findOne({ where: { username: username } });
    // console.log(user);
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
      const userToken = jwt.verify(token, SECRET);
      // console.log(`User Token: ${JSON.stringify(userToken)}`);
      if (userToken) {
        const record = await model.findOne({
          where: { username: userToken.username },
        });
        return record;
      }
    } catch (err) {
      throw new Error(err || "Invalid Token");
    }
  };
  return model;
};

module.exports = Users;
