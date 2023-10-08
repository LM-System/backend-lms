"use strict";
const express = require("express");
const userRouter = express.Router();

const signUpHandler = require("../handlers/signup-handler");
const signInHandler = require("../handlers/signin-handler");
const {usersModel} = require('../../model/relations');

const basicAuth = require("../middleware/basic.auth");
const { upload } = require("../middleware/upload");
const handleAddManyStudents = require("../handlers/addManyStudent-handler");
const handleAddManyInstructor = require("../handlers/addManyinstructor-handler");
const bearerAuth = require("../middleware/bearer.auth");
const acl = require("../middleware/acl.auth");

userRouter.post("/signup", signUpHandler);
userRouter.post("/signin", basicAuth, signInHandler);
userRouter.put("/user/:id", handleUpdateUser);
userRouter.post("/student",/*bearerAuth,acl(["instructorDepartmentHead","admin"]),*/ upload('excel'),handleAddManyStudents);
userRouter.post("/instructor",/*bearerAuth,acl(["admin"]),*/ upload('excel'),handleAddManyInstructor);

async function handleUpdateUser(req, res,next) {
  try{
  let user = await usersModel.findOne({
    where:{id:req.params.id}
  });
  let record =await user.update(req.body)
  res.status(200).json(record);
} catch (e){next(e)}
}

module.exports = userRouter;
