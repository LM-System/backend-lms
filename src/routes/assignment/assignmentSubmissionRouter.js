const express = require("express");
const assignmentSubmittionRouter = express.Router();
const bearer = require("../../auth/middleware/bearer.auth");
const acl = require("../../auth/middleware/acl.auth");
const multer = require("multer");
const path = require("path");
const { assignmentSubmittionModel } = require("../../model/relations");

assignmentSubmittionRouter.get(
  "/assignmentSubmittion",
  bearer,
  acl(["superAdmin"]),
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
assignmentSubmittionRouter.delete(
  "/assignmentSubmittion/:id",
  bearer,
  handleDelete
);

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

assignmentSubmittionRouter.post(
  "/assignmentSubmittion",
  bearer,
  acl(["superAdmin", "institutionHead", "instructor", "departmentHead"]),
  upload.single("assignmentSubmissionFile"),
  async (req, res) => {
    try {
      const { content, status, priority, assignment_id, student_id } = req.body;
      const attachmentUrl = req.file ? req.file.path : null; // The file path where the attachment is stored or null if no file is uploaded

      // Create the assignment submission with the attachment URL
      const newAssignmentSubmission = await assignmentSubmittionModel.create({
        content,
        status,
        priority,
        assignment_id,
        student_id,
        attachment: attachmentUrl,
      });

      res.json({
        message: "Assignment submission created with attachment.",
        assignmentSubmission: newAssignmentSubmission,
      });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to create assignment submission." });
    }
  }
);

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
