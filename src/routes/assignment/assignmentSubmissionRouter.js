const express = require("express");
const assignmentSubmittionRouter = express.Router();

const { assignmentSubmittionModel } = require("../../model/relations");

assignmentSubmittionRouter.get("/assignmentSubmittion", handleGetAll);
assignmentSubmittionRouter.get("/assignmentSubmittion/:id", handleGetOne);
assignmentSubmittionRouter.post("/assignmentSubmittion", handleCreate);
assignmentSubmittionRouter.put("/assignmentSubmittion/:id", handleUpdate);
assignmentSubmittionRouter.delete("/assignmentSubmittion/:id", handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await assignmentSubmittionModel.findAll({
    include: { all: true },
  });
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await assignmentSubmittionModel.findByPk(id);
  if (theRecord === null) {
    res.status(200).json("Record not found");
  } else {
    res.status(200).json(theRecord);
  }
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await assignmentSubmittionModel.create(obj);
  res.status(201).json(newRecord);
}

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

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const theRecord = await assignmentSubmittionModel.findOne({ where: { id } });
  if (!theRecord) {
    return res.status(404).json({ error: "Assignment not found" });
  }
  await theRecord.update(obj);

  res.status(200).json(theRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await assignmentSubmittionModel.destroy({
    where: { id },
  });
  res.status(204).json(deletedRecord);
}

module.exports = assignmentSubmittionRouter;
