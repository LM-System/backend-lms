const addCourse = require("./handlers/add-course-handler");
const getCourse = require("./handlers/get-course-handler");
const coursesRoutes = require("express").Router();

coursesRoutes.post('/course', (req,res) => addCourse(req, res))
coursesRoutes.get('/course/:course_id', (req,res) => getCourse(req, res))

module.exports = coursesRoutes