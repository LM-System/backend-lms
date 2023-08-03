const express = require("express");
const sectionAssignmentRouter = express.Router();

const { sectionsModel, assignmentModel } = require("../../model/relations");

sectionAssignmentRouter.get("/sectionAssignment", handleGetAll);
// sectionAssignmentRouter.get("/sectionAssignment/:id", handleGetOne);


async function handleGetAll(req, res) {
  const records = await sectionsModel.findAll({/// need test after adding section route
    include: [
      {
        model: assignmentModel,
      },
    ],
  });
  res.status(200).json(records);
}

// async function handleGetOne(req, res) {
//   const id = req.params.id;
//   let theRecord = await assignmentModel.findByPk(id);
//   if (theRecord === null) {
//     res.status(200).json("Record not found");
//   } else {
//     res.status(200).json(theRecord);
//   }
// }

/*
{
  "section_id": 1,
  "title": "Sample Assignment 2 updated",
  "description": "This is a sample assignment.",
  "due_date": "2023-08-10",
  "status": "Pending",
  "priority": "High"
}

*/

module.exports = sectionAssignmentRouter;
