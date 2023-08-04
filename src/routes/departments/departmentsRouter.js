const express = require('express');
const{Sequelize}= require('sequelize')
const departmentsRouter = express.Router();
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const {coursesModel,departmentsModel,usersModel}= require('../../model/relations')
// departmentsRouter.get('/departments', handleGetAll);
departmentsRouter.get('/departmentcourses/:id',bearer,acl(['institution','departmentHead']), handleGetDepartmentCourses);
departmentsRouter.get('/departmentinstructors/:id',bearer,acl(['institution','departmentHead']), handleGetDepartmentInstructors);
departmentsRouter.get('/departmentstudents/:id',bearer,acl(['institution','departmentHead']), handleGetDepartmentStudents);
departmentsRouter.get('/department/:id',bearer,acl(['institution','departmentHead']), handleGetOne);
departmentsRouter.post('/department',bearer,acl(['institution']), handleCreate);
departmentsRouter.put('/department/:id',bearer,acl(['institution','departmentHead']), handleUpdate);
// departmentsRouter.delete('/department/:id', handleDelete);

// async function handleGetAll(req, res) {
//   let allRecords = await departmentsModel.findAndCountAll();
//   res.status(200).json(allRecords);
// }

async function handleGetDepartmentCourses(req, res) {
  let allRecords = await coursesModel.findAndCountAll(
    {
      where:{department_id:req.params.id},
      attributes:['id','name',"description","start_date","end_date"],
      
    });
  res.status(200).json(allRecords);
}

async function handleGetDepartmentInstructors(req, res) {
  let allRecords = await usersModel.findAndCountAll(
    {
      where:{role:"instructor",department_id:req.params.id},
      attributes:['id','username','email','gender','birth_date','phone_number','role','image','address'],
      
    });
  res.status(200).json(allRecords);
}

async function handleGetDepartmentStudents(req, res) {
  let allRecords = await usersModel.findAndCountAll(
    {
      where:{role:"student",department_id:req.params.id},
      attributes:['id','username','email','gender','birth_date','phone_number','role','image','address'],
      
    });
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await departmentsModel.findOne(
    {where:{id:id},
    attributes:['id','name'],
    include:[
      // {model:usersModel,as:'users',
      // attributes:['username','email','gender','birth_date','role']},
      {model:usersModel,as:'department_head',
      attributes:['username','email','gender','birth_date','role']}]})
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await departmentsModel.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await departmentsModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
}

// async function handleDelete(req, res) {
//   let id = req.params.id;
//   let deletedRecord = await departmentsModel.destroy({where:{id:id}});
//   res.status(204).json(deletedRecord);
// }


module.exports = departmentsRouter;