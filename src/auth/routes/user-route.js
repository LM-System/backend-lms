"use strict";
const express = require("express");
const userRouter = express.Router();
const bcrypt = require('bcrypt');

const signUpHandler = require("../handlers/signup-handler");
const signInHandler = require("../handlers/signin-handler");
const {usersModel,instructorsModel} = require('../../model/relations');

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
userRouter.post("/changepassword", changePassWordHandler); //AbuEssa
userRouter.get('/departmenthead',handleDepartmentHead)


async function handleDepartmentHead(req, res,next) {
  try{
  let user = await usersModel.findAll({
    where:{role:'instructorDepartmentHead'},includes:{model:instructorsModel}
  });
  res.status(200).json(record);
} catch (e){next(e)}
}

async function handleUpdateUser(req, res,next) {
  try{
  let user = await usersModel.findOne({
    where:{id:req.params.id}
  });
  let record =await user.update(req.body)
  res.status(200).json(record);
} catch (e){next(e)}
}


async function changePassWordHandler(req, res) {
  //AbuEssa
  const { email, oldPassword, newPassword } = req.body;

  try {
    const user = await usersModel.findByPk(email);

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = userRouter;
