"use strict";

const express = require("express");
const cors = require("cors");
const usersRouter = require("./auth/routes/user-route");
const notFoundHandler = require("./errorhandller/400");
const internalError = require("./errorhandller/500");
const bearerAuth = require("./auth/middleware/bearer.auth");
const acl = require("./auth/middleware/acl.auth");

const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRouter);

app.get("/", (req, res) => {
  res.send("Server is runing");
});
app.get("/checking", bearerAuth, acl("delete"), (req, res) => {
  res.status(200).json(req.user);
});

app.use(notFoundHandler);
app.use(internalError);

function start(port) {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
