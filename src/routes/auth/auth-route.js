'use strict'
const authRoutes = require("express").Router();
const login = require("./handlers/login-handler");
const register = require("./handlers/register-handler");
const getAllUsers = require("./handlers/all-users-handler");
const setAvatar = require("./handlers/set-avatar-handler");
const logout = require("./handlers/logout-handler");


authRoutes.post("/login", (req, res, next) => login(req, res, next));
authRoutes.post("/register", (req, res, next) => register(req, res, next));
authRoutes.get("/allusers/:id", (req, res, next) => getAllUsers(req, res, next));
authRoutes.post("/setavatar/:id", (req, res, next) => setAvatar(req, res, next));
authRoutes.get("/logout/:id", (req, res, next) => logout(req, res, next));

module.exports = authRoutes;