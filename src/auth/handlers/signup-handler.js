"use strict";

const { Users } = require("../../model/index");

async function signupHandler(req, res) {
  const { username, password, email, role, gender } = req.body;
  const record = await Users.create({
    username: username,
    password: password,
    email: email,
    role: role,
    gender: gender,
  });
  res.status(201).json(record);
}

module.exports = signupHandler;
