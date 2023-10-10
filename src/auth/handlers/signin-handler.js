"use strict";

const {
  usersModel,
  instructorsModel,
  adminsModel,
  studentsModel,
  departmentsModel,
  institutionModel,
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
      include:{all:true,nested: true },
      
    });
  } else if (req.user.role === "admin" || req.user.role === "superAdmin") {
    {
      user = await usersModel.findOne({
        where: { email: req.user.email },
        include: { model: adminsModel,include: { model: institutionModel }  },
      });
    }
  } else {
    {
      user = await usersModel.findOne({
        where: { email: req.user.email },
        include: { model: studentsModel ,include: { model: departmentsModel } },
      });
    }
  }
  res.status(200).json(user);
}

module.exports = signInHandler;
