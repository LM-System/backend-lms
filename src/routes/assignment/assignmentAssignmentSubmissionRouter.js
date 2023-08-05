const express = require("express");
const assignmentAssignmentSubmissionRouter = express.Router();

const {
  assignmentSubmittionModel,
  assignmentModel,
} = require("../../model/relations");

assignmentAssignmentSubmissionRouter.get(
  "/assignmentAssignmentSubmission",
  handleGetAll
);
assignmentAssignmentSubmissionRouter.get(
  "/assignmentAssignmentSubmission/:id",
  handleGetOne
);

async function handleGetAll(req, res) {
  const records = await assignmentModel.findAll({
    /// need test after adding section route
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
