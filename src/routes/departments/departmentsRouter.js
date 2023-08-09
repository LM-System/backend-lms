const express = require('express');
const{Sequelize}= require('sequelize')
const departmentsRouter = express.Router();
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const specificity = require('../../auth/middleware/specificity.auth')
const head = require('../../auth/middleware/head')
const {coursesModel,departmentsModel,usersModel}= require('../../model/relations')
// departmentsRouter.get('/departments', handleGetAll);
departmentsRouter.get('/departmentcourses/:id',bearer,acl(['institutionHead','departmentHead']),specificity('departmentHeader'), handleGetDepartmentCourses);
departmentsRouter.get('/departmentinstructors/:id',bearer,acl(['institutionHead','departmentHead']),specificity('departmentHeader'), handleGetDepartmentInstructors);
departmentsRouter.get('/departmentstudents/:id',bearer,acl(['institutionHead','departmentHead']),specificity('departmentHeader'), handleGetDepartmentStudents);
departmentsRouter.get('/department/:id',bearer,acl(['institutionHead','departmentHead']),specificity('departmentHeader'), handleGetOne);
departmentsRouter.post('/department',bearer,acl(['institutionHead']),head('departmentHead'), handleCreate);
departmentsRouter.put('/department/:id',bearer,acl(['institutionHead','departmentHead']),specificity('departmentHeader'), handleUpdate);
// departmentsRouter.delete('/department/:id', handleDelete);

// async function handleGetAll(req, res) {
//   let allRecords = await departmentsModel.findAndCountAll();
//   res.status(200).json(allRecords);
// }

async function handleGetDepartmentCourses(req, res) {
  try{
  let allRecords = await coursesModel.findAndCountAll(
    {
      where:{department_id:req.params.id},
      attributes:['id','name',"description","start_date","end_date"],
      
    });
  res.status(200).json(allRecords);
} catch (e){next(e)}
}

async function handleGetDepartmentInstructors(req, res) {
  try{
  let allRecords = await usersModel.findAndCountAll(
    {
      where:{role:"instructor",department_id:req.params.id},
      attributes:['id','username','email','gender','birth_date','phone_number','role','image','address'],
      
    });
  res.status(200).json(allRecords);
} catch (e){next(e)}
}

async function handleGetDepartmentStudents(req, res) {
  try{
  let allRecords = await usersModel.findAndCountAll(
    {
      where:{role:"student",department_id:req.params.id},
      attributes:['id','username','email','gender','birth_date','phone_number','role','image','address'],
      
    });
  res.status(200).json(allRecords);
} catch (e){next(e)}
}

async function handleGetOne(req, res) {
  try{
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
} catch (e){next(e)}
}

async function handleCreate(req, res) {
  try{
  let obj = req.body;
  let newRecord = await departmentsModel.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleUpdate(req, res) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await departmentsModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

// async function handleDelete(req, res) {
//   let id = req.params.id;
//   let deletedRecord = await departmentsModel.destroy({where:{id:id}});
//   res.status(204).json(deletedRecord);
// }


module.exports = departmentsRouter;