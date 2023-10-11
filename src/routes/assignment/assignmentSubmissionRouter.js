const express = require("express");
const assignmentSubmittionRouter = express.Router();
const bearer = require("../../auth/middleware/bearer.auth");
const acl = require("../../auth/middleware/acl.auth");
const multer = require("multer");
const path = require("path");
const {
  studentAssignmentSubmission,
  assignmentModel,
} = require("../../model/relations");

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

assignmentSubmittionRouter.get(
  "/assignmentSubmittion/:sectionId",
  bearer,
  // acl(["superAdmin"]),
  handleGetAll
);
assignmentSubmittionRouter.get(
  "/assignmentSubmittion/:id",
  bearer,
  handleGetOne
);
assignmentSubmittionRouter.put(
  "/assignmentSubmittion/:id",
  bearer,
  handleUpdate
);
assignmentSubmittionRouter.post(
  "/assignmentSubmittion",
  bearer,
  // acl(["student"]),
  upload.single("assignmentSubmissionFile"),
  handleCreate
);

async function handleGetAll(req, res) {
  try {
    let allRecords = await assignmentModel.findAndCountAll({
      where: { sectionId: req.params.sectionId },
    });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetOne(req, res) {
  try {
    const id = req.params.id;
    let theRecord = await studentAssignmentSubmission.findByPk(id);
    if (theRecord === null) {
      res.status(200).json("Record not found");
    } else {
      res.status(200).json(theRecord);
    }
  } catch (e) {
    next(e);
  }
}

async function handleCreate(req, res) {
  try {
    const { content, status, priority, assignmentId, studentId } = req.body;
    const attachmentUrl = req.file ? req.file.path : null; // The file path where the attachment is stored or null if no file is uploaded

    // Create the assignment submission with the attachment URL
    const newAssignmentSubmission = await studentAssignmentSubmission.create({
      content,
      status,
      priority,
      assignmentId,
      studentId,
      attachment: attachmentUrl,
    });

    res.json({
      message: "Assignment submission created with attachment.",
      assignmentSubmission: newAssignmentSubmission,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create assignment submission." });
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    const theRecord = await studentAssignmentSubmission.findOne({
      where: { id },
    });
    if (!theRecord) {
      return res.status(404).json({ error: "Assignment not found" });
    }
    await theRecord.update(obj);

    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

module.exports = assignmentSubmittionRouter;
