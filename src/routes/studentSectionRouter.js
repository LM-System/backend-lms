// section router
const express = require('express');
const sectionRouter = express.Router();
const {sectionsModel,usersModel,studentSectionModel}= require('../model/relations')
const Collection = require("../model/collection");
const sectionCollection =new Collection(sectionsModel);
const studentSectionCollection =new Collection(studentSectionModel);

sectionRouter.get('/section', handleGetAll);
sectionRouter.get('/classlist/:id', handleGetAllStudent);
sectionRouter.post('/registersection/:userId/:sectionId', handleCreate);
// sectionRouter.get('/section', handleGetOne);
sectionRouter.put('/section/:id', handleUpdate);
sectionRouter.delete('/section/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await sectionCollection.read();
  res.status(200).json(allRecords);
}
async function handleGetAllStudent(req, res) {
  const id=req.params.id;
  let allRecords = await sectionCollection.readWithRelation(usersModel,id);
  res.status(200).json(allRecords);
}


async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await sectionCollection.findOne()
  res.status(200).json(theRecord);
}


async function handleCreate(req, res) {
  let obj = req.params;
  console.log(obj);
  let newRecord = await studentSectionCollection.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await studentSectionCollection.update(obj,id)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await studentSectionCollection.delete(id);
  res.status(204).json(deletedRecord);
}


module.exports = sectionRouter;
