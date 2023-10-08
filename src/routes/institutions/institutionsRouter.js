const express = require("express");
const institutionRouter = express.Router();
const {
  institutionModel,
  studentsModel,
  departmentsModel,
  adminsModel,
  instructorsModel,
} = require("../../model/relations");
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");
const Collection = require("../../model/collection");
const institutionCollection = new Collection(institutionModel);


institutionRouter.get(
  "/institutions",
  bearer,
  acl(["superAdmin"]),
  handleGetAll
);
institutionRouter.get("/institution/:id", bearer, handleGetOne);
institutionRouter.get(
  "/institutiondepartments/:id",
  bearer,
  acl(["admin"]),
  handleGetinstitutiondepartments
);
institutionRouter.get(
  "/institutionstudents/:id",
  bearer,
  acl(["admin"]),
  handleGetinstitutionstudents
);
institutionRouter.get(
  "/institutionemployees/:id",
  bearer,
  acl(["admin"]),
  handleGetinstitutionemployees
);
institutionRouter.post(
  "/institution",
  bearer,
  acl(["superAdmin"]),
  handleCreate
);
institutionRouter.put(
  "/institution/:id",
  bearer,
  acl(["superAdmin", "admin"]),
  handleUpdate
);
institutionRouter.delete(
  "/institution/:id",
  bearer,
  acl(["superAdmin"]),
  handleDelete
);

async function handleGetAll(req, res, next) {
  try {
    let allRecords = await institutionModel.findAndCountAll();
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetOne(req, res, next) {
  try {
    const id = req.params.id;
    let theRecord = await institutionModel.findAll({ where: { id: id } });
    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

async function handleGetinstitutiondepartments(req, res, next) {
  try {
    const id = req.params.id;
    let theRecord = await institutionModel.findOne({
      where: { id: id ,include:{ model: departmentsModel,include:{model:instructorsModel,as: "departmentHead"} }},
    });
    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

async function handleGetinstitutionstudents(req, res, next) {
  try {
    const id = req.params.id;
    let theRecord = await institutionModel.findAndCountAll({
      where: { id: id },
      include: { model: departmentsModel, include: { model: studentsModel } },
    });
    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

async function handleGetinstitutionemployees(req, res, next) {
  try {
    const id = req.params.id;
    let theRecord = await institutionModel.findAndCountAll({
      where: {
        id: id,
        include: { model: adminsModel },
        include: {
          model: departmentsModel,
          attributes: ["id"],
          include: { model: instructorsModel },
        },
      },
    });
    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

async function handleCreate(req, res, next) {
  try {
    let obj = req.body;
    let newRecord = await institutionCollection.create(obj);
    res.status(201).json(newRecord);
  } catch (e) {
    next(e);
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await institutionCollection.update(obj,id);
    res.status(200).json(updatedRecord);
  } catch (e) {
    next(e);
  }
}

async function handleDelete(req, res, next) {
  try {
    let id = req.params.id;
    let deletedRecord = await institutionCollection.delete(id);
    res.status(204).json(deletedRecord);
  } catch (e) {
    next(e);
  }
}

module.exports = institutionRouter;
