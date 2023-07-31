"use strict";
require("dotenv").config();

async function signInHandler(req, res) {
  res.status(200).json(req.user);
}

module.exports = signInHandler;
