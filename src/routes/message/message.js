const express = require("express");
const { Op } = require("sequelize");

const messageRouter = express.Router();

const { messageModel } = require("../../model/relations");

messageRouter.post("/getMessage", handleGetAll);
messageRouter.post("/message", handleCreate);

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

async function handleCreate(req, res) {
  try {
    const { from, to, message } = req.body;

    // Create a new message using the message model
    const data = await messageModel.create({
      text: message,
      users: [from, to],
      senderId: from,
    });

    if (data) {
      return res.json({ msg: "Message added successfully." });
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (ex) {
    // Handle any errors that might occur during the database operation
    console.error(ex);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = messageRouter;
