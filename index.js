"use strict";

require("dotenv").config();
const socket = require("socket.io");

const { start } = require("./src/server");
const { sequelize } = require("./src/model/index");
const port = process.env.PORT || 4000;
const db = sequelize;

// Add socket.io code here
const server = start(port);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.msg);
    }
  });
});

// Synchronize the database and start the server
db.sync({ force: false }).then(() => {
  console.log(`Database synchronized and run on port ${port}`);
});
