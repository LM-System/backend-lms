'use strict'
// section router
const express = require('express');
const studentSectionRouter = express.Router();
const {sequelize}= require('../../model/index')
const {studentSectionModel, usersModel,sectionsModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const studentSectionCollection =new Collection(studentSectionModel);
const userCollection =new Collection(usersModel);


// student can register delet or change the section with this Endpoints
studentSectionRouter.get('/studentsections/:id', handleGetAllStudentSections);
studentSectionRouter.get('/studentsections', handleRead);//for testing
studentSectionRouter.post('/registersection/:userId/:sectionId', handleRegisterCreate);
studentSectionRouter.put('/registersection/:sectionId', handleRegisterUpdate);
studentSectionRouter.delete('/registersection/:sectionId', handleRegisterDelete);


// student can register , delete , change or get the classlist the section with this function bellow

async function handleGetAllStudentSections(req, res) {
  const id = req.params.id;
  const att1=['id','username','email','role','institution_id','department_id'];
  const att2=['sectionId'];
  const att3=['id','name','course_id','year','semester','room_no','status','building','days','instructor_id'];
  const att4=['id','username','email','role','institution_id','department_id'];
  // console.log(id);
  let allRecords = await userCollection.readAllThingsNestdRelations(studentSectionModel,sectionsModel,usersModel,id,att1,att2,att3,att4)
  res.status(200).json(allRecords);
}

async function handleRead(req, res) { //for testing
  let newRecord = await studentSectionCollection.read();
  res.status(201).json(newRecord);
}
async function handleRegisterCreate(req, res) {
  let obj = req.params;
  // console.log(obj);
  let newRecord = await studentSectionCollection.create(obj);
  res.status(201).json(newRecord);
}

async function handleRegisterUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await studentSectionCollection.update(obj,id)
  res.status(200).json(updatedRecord);
}

async function handleRegisterDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await studentSectionCollection.delete(id);
  res.status(204).json(deletedRecord);
}


module.exports = studentSectionRouter;
