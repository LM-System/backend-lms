"use strict";

const { usersModel } = require("../../model/index");

const bcrypt = require("bcrypt");

async function signUpHandler(req, res) {
  const { password, email } = req.body;
  console.log(req.body);
  const record = await usersModel.findOne({
    where: {
      email: email,
    },
  });
  if (!record) {
    const hashedPassword = bcrypt.hashSync(password, 12);
    const record = await usersModel.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).send(record);
  } else {
    res.send("user exists");
  }
}

module.exports = signUpHandler;
