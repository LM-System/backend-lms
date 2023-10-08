const express = require("express");
const { Sequelize } = require("sequelize");
const departmentsRouter = express.Router();
const acl = require("../../auth/middleware/acl.auth");
const bearer = require("../../auth/middleware/bearer.auth");
const specificity = require("../../auth/middleware/specificity.auth");
const head = require("../../auth/middleware/head");
const {
  coursesModel,
  departmentsModel,
  studentsModel,
  institutionModel,
  instructorsModel,
} = require("../../model/relations");
// departmentsRouter.get('/departments', handleGetAll);

departmentsRouter.get(
  "/departmentcourses/:id",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleGetDepartmentCourses
);
departmentsRouter.get(
  "/departmentinstructors/:department_id",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleGetDepartmentInstructors
);
departmentsRouter.get(
  "/departmentstudents/:department_id",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleGetDepartmentStudents
);
departmentsRouter.get(
  "/departmentinstitution/:institutionId",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleGetDepartmentInstitution
);
departmentsRouter.get(
  "/department/:department_id",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleGetOne
);
departmentsRouter.post("/department", bearer, acl(["admin"]), handleCreate);
departmentsRouter.put(
  "/department/:id",
  bearer,
  acl(["admin", "instructorDepartmentHead"]),
  /*specificity('departmentHeader'),*/ handleUpdate
);

departmentsRouter.delete(
  "/department/:id",
  bearer,
  acl(["admin"]), handleDelete
);
// async function handleGetAll(req, res) {
//   let allRecords = await departmentsModel.findAndCountAll();
//   res.status(200).json(allRecords);
// }

async function handleGetDepartmentCourses(req, res) {
  try {
    let allRecords = await coursesModel.findAndCountAll({
      where: { departmentId: req.params.id },
    });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetDepartmentInstructors(req, res) {
  try {
    let id = req.params.department_id;
    let allRecords = await instructorsModel.findAndCountAll({
      where: { departmentId: id },
    });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetDepartmentStudents(req, res) {
  try {
    let id = req.params.department_id;
    let allRecords = await studentsModel.findAndCountAll({
      where: { departmentId: id },
    });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetDepartmentInstitution(req, res) {
  try {
    let id = req.params.institutionId;
    let allRecords = await institutionModel.findAndCountAll({
      where: { institutionId: id },
    });
    res.status(200).json(allRecords);
  } catch (e) {
    next(e);
  }
}

async function handleGetOne(req, res) {
  try {
    const id = req.params.department_id;
    let theRecord = await departmentsModel.findOne({
      where: { id: id },
      include: [{ model: instructorsModel, as: "departmentHead" }],
    });
    res.status(200).json(theRecord);
  } catch (e) {
    next(e);
  }
}

async function handleCreate(req, res, next) {
  try {
    let obj = req.body;
    let newRecord = await departmentsModel.create(obj);
    res.status(201).json(newRecord);
  } catch (e) {
    next(e);
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await departmentsModel.findOne({ where: { id } });
    res.status(200).json(await updatedRecord.update(obj));
  } catch (e) {
    next(e);
  }
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await departmentsModel.destroy({where:{id:id}});
  res.status(204).json(deletedRecord);
}

module.exports = departmentsRouter;
