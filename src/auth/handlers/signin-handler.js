"use strict";

const {
  usersModel,
  instructorsModel,
  adminsModel,
  studentsModel,
} = require("../../model/relations");

require("dotenv").config();

async function signInHandler(req, res) {
  let user = {};
  if (
    req.user.role === "instructor" ||
    req.user.role === "instructorDepartmentHead"
  ) {
    user = await usersModel.findOne({
      where: { email: req.user.email },
      include: { model: instructorsModel },
    });
  } else if (req.user.role === "admin" || req.user.role === "superAdmin") {
    {
      user = await usersModel.findOne({
        where: { email: req.user.email },
        include: { model: adminsModel },
      });
    }
  } else {
    {
      user = await usersModel.findOne({
        where: { email: req.user.email },
        include: { model: studentsModel },
      });
    }
  }
  res.status(200).json(user);
}

module.exports = signInHandler;
