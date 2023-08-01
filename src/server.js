require("dotenv").config();
const express = require("express");
const app = express();
const courseRouter = require("./routes/coursesRouter");
const userRouter = require("./auth/routes/user-route");
const studentSectonRouter = require("./routes/studentSectionRouter");
const instructorsCoursesRouter = require("./routes/instructorsCoursesRouter");
const departmentsRouter = require("./routes/departments/departmentsRouter");
const sectionAnnouncementRouter = require('./routes/announcments/sectionAnnouncementsRouter')
const announcementRouter = require('./routes/announcments/announcmentsRouter')
const notFoundHandler = require("./errorhandller/400");
const internalError = require("./errorhandller/500");
const institutionRouter = require('./routes/institutions/institutionsRouter')
app.use(express.json());
app.use(courseRouter);
app.use(userRouter);
app.use(studentSectonRouter);
app.use(instructorsCoursesRouter);
app.use(departmentsRouter);
app.use(announcementRouter)
app.use(sectionAnnouncementRouter)
app.use(institutionRouter)
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
