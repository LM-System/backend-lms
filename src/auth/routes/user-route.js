"use strict";
const express = require("express");
const userRouter = express.Router();

const signUpHandler = require("../handlers/signup-handler");
const signInHandler = require("../handlers/signin-handler");
const {
  usersModel,
  sectionsModel,
  departmentsModel,
} = require('../../model/relations');

const basicAuth = require("../middleware/basic.auth");
const { upload } = require("../middleware/upload");
const handleAddMany = require("../handlers/addMany-handler");

userRouter.post("/signup", signUpHandler);
userRouter.post("/signin", basicAuth, signInHandler);
userRouter.get("/users", handleGetAll);
userRouter.post("/users", upload('excel'),handleAddMany);

async function handleGetAll(req, res) {
  let allRecords = await usersModel.findAll({
    // attributes: ["id", "username", "email", "gender", "birth_date", "role"],
    include: {all:true},
  });
  res.status(200).json(allRecords);
}

module.exports = userRouter;