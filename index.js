"use strict";

require("dotenv").config();

const { start } = require("./src/server");
const { db } = require("./src/model/index");
const port = process.env.PORT || 4000;

db.sync().then(() => {
  start(port);
});
