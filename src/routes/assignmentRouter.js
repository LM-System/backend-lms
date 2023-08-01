const express = require("express");
const assignmentRouter = express.Router();

const { sectionsModel, assignmentModel } = require("../model/relations");

assignmentRouter.get("/assignment", handleGetAll);
assignmentRouter.get("/assignment/:id", handleGetOne);
assignmentRouter.post("/assignment", handleCreate);
assignmentRouter.put("/assignment/:id", handleUpdate);
assignmentRouter.delete("/assignment/:id", handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await assignmentModel.findAll({ include: { all: true } });
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await assignmentModel.findByPk(id);
  if (theRecord === null) {
    res.status(200).json("Record not found");
  } else {
    res.status(200).json(theRecord);
  }
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await assignmentModel.create(obj);
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
  const assignmentRecord = await assignmentModel.findOne({ where: { id } });
  if (!assignmentRecord) {
    return res.status(404).json({ error: "Assignment not found" });
  }
  await assignmentRecord.update(obj);

  res.status(200).json(assignmentRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await assignmentModel.destroy({ where: { id } });
  res.status(204).json(deletedRecord);
}

module.exports = assignmentRouter;
