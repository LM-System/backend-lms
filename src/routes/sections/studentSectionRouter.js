'use strict'
// section router
const express = require('express');
const studentSectionRouter = express.Router();
const {sequelize}= require('../../model/index')
const {studentSectionModel, usersModel,sectionsModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const studentSectionCollection =new Collection(studentSectionModel);
const userCollection =new Collection(usersModel);


// student can register delet or change the section with this Endpoints
studentSectionRouter.get('/studentsections/:id',bearerAuth,acl('student'), handleGetAllStudentSections);
studentSectionRouter.get('/studentsections',bearerAuth,acl('student'), handleRead);//for testing
studentSectionRouter.post('/registersection/:userId/:sectionId',bearerAuth,acl('student'), handleRegisterCreate);
studentSectionRouter.put('/registersection/:sectionId',bearerAuth,acl('student'), handleRegisterUpdate);
studentSectionRouter.delete('/registersection/:sectionId',bearerAuth,acl('student'), handleRegisterDelete);


// student can register , delete , change or get the classlist the section with this function bellow

async function handleGetAllStudentSections(req, res) {
  try{
  const id = req.params.id;
  const att1=['id','username','email','role','institution_id','department_id'];
  const att2=['sectionId'];
  const att3=['id','name','course_id','year','semester','room_no','status','building','days','instructor_id'];
  const att4=['id','username','email','role','institution_id','department_id'];
  let allRecords = await userCollection.readAllThingsNestdRelations(studentSectionModel,sectionsModel,usersModel,id,att1,att2,att3,att4)
  res.status(200).json(allRecords);
} catch (e){next(e)}
}

async function handleRead(req, res) { //for testing
  try{
  let newRecord = await studentSectionCollection.read();
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleRegisterCreate(req, res) {
  try{
  let obj = req.params;
  let newRecord = await studentSectionCollection.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleRegisterUpdate(req, res) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await studentSectionCollection.update(obj,id)
  res.status(200).json(updatedRecord);
} catch (e){next(e)}
}

async function handleRegisterDelete(req, res) {
  try{
  let id = req.params.id;
  let deletedRecord = await studentSectionCollection.delete(id);
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = studentSectionRouter;
