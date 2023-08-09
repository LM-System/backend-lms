const express = require("express");
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");

const assignmentAssignmentSubmissionRouter = express.Router();

const {
  assignmentSubmittionModel,
  assignmentModel,
} = require("../../model/relations");

assignmentAssignmentSubmissionRouter.get(
  "/assignmentAssignmentSubmission",
  bearer,
  acl(["superAdmin"]),
  handleGetAll
);
assignmentAssignmentSubmissionRouter.get(
  "/assignmentAssignmentSubmission/:id",
  bearer,
  handleGetOne
);

async function handleGetAll(req, res) {
  const records = await assignmentModel.findAll({
    include: [
      {
        model: assignmentSubmittionModel,
      },
    ],
  });
  res.status(200).json(records);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  const theRecord = await assignmentModel.findByPk(id, {
    include: [
      {
        model: assignmentSubmittionModel,
      },
    ],
  });
  if (theRecord === null) {
    res.status(200).json("Record not found");
  } else {
    res.status(200).json(theRecord);
  }
}

module.exports = assignmentAssignmentSubmissionRouter;
