const express = require("express");
const assignmentRouter = express.Router();
const multer = require("multer");
const path = require("path");
const { assignmentModel } = require("../../model/relations");
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");

assignmentRouter.get("/assignment", bearer, acl(["superAdmin"]), handleGetAll);
assignmentRouter.get("/assignment/:id", bearer, handleGetOne);
assignmentRouter.put("/assignment/:id", bearer, handleUpdate);
assignmentRouter.delete(
  "/assignment/:id",
  bearer,
  acl(["superAdmin", "institutionHead", "instructor", "departmentHead"]),
  handleDelete
);

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

/// Attach file to assignment

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

assignmentRouter.post(
  "/assignment",
  bearer,
  acl(["superAdmin", "institutionHead", "instructor", "departmentHead"]),
  upload.single("assignmentFile"),
  async (req, res) => {
    try {
      const { section_id, title, description, due_date, status, priority } =
        req.body;
      const attachmentUrl = req.file ? req.file.path : null; // The file path where the attachment is stored or null if no file is uploaded

      // Create the assignment with the attachment  URL
      const newAssignment = await assignmentModel.create({
        section_id,
        title,
        description,
        due_date,
        status,
        priority,
        attachment: attachmentUrl,
      });

      res.json({
        message: "Assignment created with attachment.",
        assignment: newAssignment,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create assignment." });
    }
  }
);

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
