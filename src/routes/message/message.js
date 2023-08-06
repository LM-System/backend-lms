const express = require("express");
const { Op } = require("sequelize");

const messageRouter = express.Router();

const { messageModel } = require("../../model/relations");

messageRouter.get("/getMessage", handleGetAll);
messageRouter.post("/addMessage", handleCreate);

async function handleGetAll(req, res, next) {
  try {
    const { from, to } = req.body;

    const messages = await messageModel.findAll({
      where: {
        users: {
          [Op.contains]: [from, to],
        },
      },
      order: [["updatedAt", "ASC"]],
    });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.senderId.toString() === from,
        message: msg.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
}

async function handleCreate(req, res, next) {
  try {
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      text: message,
      users: [from, to],
      senderId: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
}

module.exports = messageRouter;
