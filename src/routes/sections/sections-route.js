const addSection = require("./handlers/add-section-handler");
const getSection = require("./handlers/get-section-handler");
const addStudent = require("./handlers/add-students-handler");
const sectionsRoutes = require("express").Router();

sectionsRoutes.post("/section/:course_id", (req, res, next) => addSection(req, res, next));
sectionsRoutes.get("/section/:section_id", (req, res, next) => getSection(req, res, next));
sectionsRoutes.post("/section/:section_id/:user_id", (req, res, next) => addStudent(req, res, next));

module.exports = sectionsRoutes;