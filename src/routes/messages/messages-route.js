const addMessage = require("./handlers/add-messages-handler");
const getMessages = require("./handlers/get-messages-handler");
const messagesRoutes = require("express").Router();

messagesRoutes.post("/addmsg/", (req, res, next) => addMessage(req, res, next));
messagesRoutes.post("/getmsg/", (req, res, next) => getMessages(req, res, next));

module.exports = messagesRoutes;
