require("dotenv").config();
const express = require("express");
const app = express();
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

const institutionRouter = require("./routes/institutions/institutionsRouter");
app.use(express.json());
app.use(courseRouter);
app.use(userRouter);
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
app.get("/", (req, res) => {
  res.json("welcome to the home page");
});

app.use(notFoundHandler);
app.use(internalError);

function start(port) {
  app.listen(port, () => {
    console.log(`The website is up and listen on port ${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
