const express = require("express");
const assignmentRouter = express.Router();
const multer = require("multer");
const path = require("path");
const { assignmentModel } = require("../../model/relations");
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage });

assignmentRouter.get(
  "/assignment",
  bearer,
  acl(["instructor", "instructorDepartmentHead"]),
  handleGetAll
);
assignmentRouter.get("/assignment/:id", bearer, handleGetOne);
assignmentRouter.post(
  "/assignment",
  // bearer,
  upload.single("assignmentFile"),
  handleCreate
);
assignmentRouter.put("/assignment/:id", bearer, handleUpdate);
assignmentRouter.delete(
  "/assignment/:id",
  bearer,
  acl(["instructor", "instructorDepartmentHead"]),
  handleDelete
);
async function handleGetAll(req, res) {
  try {
    let allRecords = await assignmentModel.findAll({ include: { all: true } });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetOne(req, res) {
  try {
    const id = req.params.id;
    let theRecord = await assignmentModel.findByPk(id);
    if (theRecord === null) {
      res.status(200).json("Record not found");
    } else {
      res.status(200).json(theRecord);
    }
  } catch (e) {
    next(e);
  }
}

/// Attach file to assignment

async function handleCreate(req, res) {
  try {
    const { sectionId, title, description, due_date, status, priority } =
      req.body;
    const attachmentUrl = req.file ? req.file.path : null; // The file path where the attachment is stored or null if no file is uploaded
      console.log(req);
    // Create the assignment with the attachment  URL
    const newAssignment = await assignmentModel.create({
      sectionId:sectionId,
      title:title,
      description:description,
      due_date:due_date,
      status:status,
      priority:priority,
      attachment: attachmentUrl,
    });
    // id | title | description | due_date 
    // | priority | attachment | createdAt 
    // | updatedAt | sectionId
    res.json({
      message: "Assignment created with attachment.",
      assignment: newAssignment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create assignment." });
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    const assignmentRecord = await assignmentModel.findOne({ where: { id } });
    if (!assignmentRecord) {
      return res.status(404).json({ error: "Assignment not found" });
    }
    await assignmentRecord.update(obj);

    res.status(200).json(assignmentRecord);
  } catch (e) {
    next(e);
  }
}

async function handleDelete(req, res, next) {
  try {
    let id = req.params.id;
    let deletedRecord = await assignmentModel.destroy({ where: { id } });
    res.status(204).json(deletedRecord);
  } catch (e) {
    next(e);
  }
}

module.exports = assignmentRouter;
