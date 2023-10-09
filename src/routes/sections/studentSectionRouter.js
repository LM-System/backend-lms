'use strict'
// section router
const express = require('express');
const studentSectionRouter = express.Router();
const {sequelize, instructorsModel}= require('../../model/index')
const {studentSectionModel, usersModel,sectionsModel,studentsModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const studentSectionCollection =new Collection(studentSectionModel);
const userCollection =new Collection(usersModel);


// student can register delet or change the section with this Endpoints
studentSectionRouter.get('/studentsections/:id',bearerAuth, handleGetAllStudentSections);
studentSectionRouter.get('/studentsections',bearerAuth, handleRead);//for testing
studentSectionRouter.post('/registersection/:studentId/:sectionId',bearerAuth, handleRegisterCreate);
studentSectionRouter.put('/registersection/:sectionId',bearerAuth, handleRegisterUpdate);
studentSectionRouter.delete('/registersection/:sectionId',bearerAuth, handleRegisterDelete);


// student can register , delete , change or get the classlist the section with this function bellow

async function handleGetAllStudentSections(req, res) {
  try{
  const id = req.params.id;
  let allRecords = await studentsModel.findOne({ where: { id: id } ,include:{model:sectionsModel,include:{model:instructorsModel}}})
  res.status(200).json(allRecords);
} catch (e){next(e)}
}
// async function handleGetOneStudentSections(req, res) {
//   try{
//   const id = req.params.id;
//   let allRecords = await studentsModel.findOne({ where: { id: id } ,include:{model:sectionsModel}})
//   res.status(200).json(allRecords);
// } catch (e){next(e)}
// }

async function handleRead(req, res,next) { //for testing
  try{
  let newRecord = await studentSectionCollection.read();
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleRegisterCreate(req, res,next) {
  try{
  let obj = req.params;
  let newRecord = await studentSectionCollection.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleRegisterUpdate(req, res,next) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await studentSectionCollection.update(obj,id)
  res.status(200).json(updatedRecord);
} catch (e){next(e)}
}

async function handleRegisterDelete(req, res,next) {
  try{
  let id = req.params.id;
  let deletedRecord = await studentSectionCollection.delete(id);
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = studentSectionRouter;
