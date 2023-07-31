"use strict";

const { usersModel } = require("../../model/index");

function bearerAuth(req, res, next) {
  if (req.headers.authorization) {
    const parsedToken = req.headers.authorization.split(" ")[1];
    usersModel.bearerToken(parsedToken)
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next("Error in bear");
  }
}

module.exports = bearerAuth;
