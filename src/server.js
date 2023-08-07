require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const {chatsModel} = require('./model/relations')
const courseRouter = require("./routes/courses/coursesRouter");
const userRouter = require("./auth/routes/user-route");
const studentSectonRouter = require("./routes/sections/studentSectionRouter");
const instructorsSectionRouter = require("./routes/sections/instructorsSectionRouter");
const sectonRouter = require("./routes/sections/sectionRouter");
const departmentsRouter = require("./routes/departments/departmentsRouter");
const sectionAnnouncementRouter = require("./routes/announcments/sectionAnnouncementsRouter");
const announcementRouter = require("./routes/announcments/announcmentsRouter");
const notFoundHandler = require("./errorhandller/400");
const internalError = require("./errorhandller/500");

const assignmentRouter = require("./routes/assignment/assignmentRouter");
const sectionAssignmentRouter = require("./routes/assignment/assignmentSectionRouter");
const assignmentSubmittionRouter = require("./routes/assignment/assignmentSubmissionRouter");
const assignmentAssignmentSubmissionRouter = require("./routes/assignment/assignmentAssignmentSubmissionRouter");
const chatRouter = require('./routes/chat/chatRouter')
const prerequisiteRouter= require('./routes/courses/prerequisiteRouter')

const institutionRouter = require("./routes/institutions/institutionsRouter");
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(courseRouter);
app.use(studentSectonRouter);
app.use(instructorsSectionRouter);
app.use(sectonRouter);
app.use(departmentsRouter);
app.use(assignmentRouter);
app.use(announcementRouter);
app.use(sectionAnnouncementRouter);
app.use(institutionRouter);
app.use(sectionAssignmentRouter);
app.use(assignmentSubmittionRouter);
app.use(assignmentAssignmentSubmissionRouter);
app.use(prerequisiteRouter)
app.use(chatRouter)
app.get("/", (req, res) => {
  res.json("welcome to the home page");
});

app.use(notFoundHandler);
app.use(internalError);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", async(data) => {
    await chatsModel.create(data)
    socket.to(data.room_id).emit("receive_message", data);
  });
  // socket.on("join_section", (data) => {
  //   socket.join(data);
  //   console.log(`User with ID: ${socket.id} joined room: ${data}`);
  // });

  // socket.on("send_notification", async(data) => {
  //   // console.log(data);
  //   // await chatsModel.create(data)
  //   socket.to(data.room_id).emit("receive_notification", data);
  // });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});





function start(port) {
  server.listen(port, () => {
    console.log(`The website is up and listen on port ${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
