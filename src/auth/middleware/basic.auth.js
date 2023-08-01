"use strict";

const base64 = require("base-64");
const { usersModel } = require("../../model/index");

function basicAuth(req, res, next) {
  if (req.headers.authorization) {
    console.log(req.headers.authorization);
    const encodedUser = req.headers.authorization.split(" ")[1];
    const decodedUser = base64.decode(encodedUser).split(":");
    const [username, password] = decodedUser;
    usersModel.authUser(username, password)
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => {
        next(err);
      });
    // console.log(encodedUser);
    // console.log(decodedUser);
  } else {
    next("Error");
  }
}

module.exports = basicAuth;
