"use strict";
const express = require("express");
const attendanceRouter = express.Router();
const { attendanceModel } = require("../../model/relations");
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");
const Collection = require("../../model/collection");
const attendanceCollection = new Collection(attendanceModel);

// Get all attendance records for a specific section
attendanceModel.post(
  "/attendance/",
  bearer,
  acl(["instructorDepartmentHead", "instructor"]),
  handleCreate
);
attendanceModel.put(
  "/attendance/:id",
  bearer,
  acl(["instructorDepartmentHead", "instructor"]),
  handleUpdate
);
attendanceModel.delete(
  "/attendance/:id",
  bearer,
  acl(["instructorDepartmentHead", "instructor"]),
  handleDelete
);
attendanceModel.get(
  "/attendance/:sectionId/:studentId",
  bearer,
  acl(["instructorDepartmentHead", "instructor", "student"]),
  handleGetAttendeanceStudentOneSection
);

async function handleGetAttendeanceStudentOneSection(req, res, next) {
  try {
    let newRecord = await attendanceModel.findAll({
      where: {
        sectionId: req.params.sectionId,
        studentId: req.params.studentId,
      },
    });
    res.status(200).json(newRecord);
  } catch (e) {
    next(e);
  }
}
async function handleCreate(req, res, next) {
  try {
    let obj = req.body;
    let newRecord = await attendanceCollection.create(obj);
    res.status(201).json(newRecord);
  } catch (e) {
    next(e);
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await attendanceCollection.update(obj, id);
    res.status(200).json(await updatedRecord.update(obj));
  } catch (e) {
    next(e);
  }
}

async function handleDelete(req, res, next) {
  try {
    let id = req.params.id;
    let deletedRecord = await attendanceCollection.delete(id);
    res.status(204).json(deletedRecord);
  } catch (e) {
    next(e);
  }
}

module.exports = attendanceRouter;
