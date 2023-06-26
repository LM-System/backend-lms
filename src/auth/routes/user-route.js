"use strict";

const express = require("express");
const model = require("../../model/index");
const signupHandler = require("../handlers/signup-handler");
const basicAuth = require("../middleware/basic.auth");
const usersRouter = express.Router();

usersRouter.post("/signup", signupHandler);
usersRouter.post("/signin", basicAuth, signinHandler);

function signinHandler(req, res) {
  res.status(200).json(req.user);
}
usersRouter.post("");

module.exports = usersRouter;
