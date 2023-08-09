const express = require("express");
const sectionAssignmentRouter = express.Router();
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");

const { sectionsModel, assignmentModel } = require("../../model/relations");

sectionAssignmentRouter.get(
  "/sectionAssignment",
  bearer,
  acl(["superAdmin"]),
  handleGetAll
);
sectionAssignmentRouter.get("/sectionAssignment/:id", bearer, handleGetOne);

async function handleGetAll(req, res) {
  const records = await sectionsModel.findAll({
    /// need test after adding section route
    include: [
      {
        model: assignmentModel,
      },
    ],
  });
  res.status(200).json(records);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  const theRecord = await sectionsModel.findByPk(id, {
    include: [
      {
        model: assignmentModel,
      },
    ],
  });
  if (theRecord === null) {
    res.status(200).json("Record not found");
  } else {
    res.status(200).json(theRecord);
  }
}

module.exports = sectionAssignmentRouter;
