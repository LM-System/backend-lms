require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require('body-parser')
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
const profileImageRouter = require('./routes/profile-image/profile-image-router')
const notFoundHandler = require("./errorhandller/400");
const internalError = require("./errorhandller/500");
const contentRouter = require('./routes/sections/contentRouter')
const assignmentRouter = require("./routes/assignment/assignmentRouter");
const sectionAssignmentRouter = require("./routes/assignment/assignmentSectionRouter");
const assignmentSubmittionRouter = require("./routes/assignment/assignmentSubmissionRouter");
const assignmentAssignmentSubmissionRouter = require("./routes/assignment/assignmentAssignmentSubmissionRouter");
const chatRouter = require('./routes/chat/chatRouter')
const prerequisiteRouter= require('./routes/courses/prerequisiteRouter')
// const contentFileRouter = require('./routes/sections/contentFileRouter')
const institutionRouter = require("./routes/institutions/institutionsRouter");
const feedbackRouter = require("./routes/feedback/feedbackRouter");
const adminRouter = require("./routes/allUsers/admin.route");
const studentRouter = require("./routes/allUsers/student.route");
const instructorRouter = require("./routes/allUsers/instructor.route");
const { log } = require("console");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json ({limit: '500mb'}));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(userRouter);
app.use(adminRouter)
app.use(studentRouter)
app.use(instructorRouter)

app.use(courseRouter);
app.use(sectonRouter);
app.use(departmentsRouter);
app.use(assignmentRouter);
app.use(announcementRouter);
app.use(sectionAnnouncementRouter);
app.use(studentSectonRouter);
app.use(instructorsSectionRouter);
app.use(sectionAssignmentRouter);
app.use(assignmentSubmittionRouter);
app.use(assignmentAssignmentSubmissionRouter);
app.use(prerequisiteRouter)

app.use(institutionRouter);
app.use(chatRouter)
app.use(contentRouter)
// app.use(contentFileRouter)
app.use(feedbackRouter)
app.use(profileImageRouter)
app.use(notFoundHandler);
app.use(internalError);

app.get('/',(req,res)=>{
  res.send("server is running")
})

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
    chatsModel.findOne({where:{id:data}})
    .then((result)=>{
      if(result){
        const messages = JSON.parse(result.messages)
        socket.emit('prev_messages',messages)
      }
    })
    
  });

  socket.on("send_message", async(data) => {
    // await chatsModel.create(data)
    socket.to(data.room_id).emit("receive_message", data);
  });
  socket.on('save_data',(data)=>{
    const msgs = JSON.stringify(data[0])
    const id = data[1]
    console.log(data)
    console.log('......................',msgs)
    chatsModel.findOne({where:{id:id}})
    .then((result)=>{
        result.update({messages:msgs})
      })
      .catch(()=>{
        chatsModel.create({
          id:id,
          messages:msgs
        })
      })
  })
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
