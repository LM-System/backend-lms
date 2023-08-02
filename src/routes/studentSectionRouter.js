// section router
const express = require('express');
const sectionRouter = express.Router();
const {sectionsModel,usersModel,}= require('../model/relations')
const Collection = require("../model/collection");
const sectionCollection =new Collection(sectionsModel);

sectionRouter.get('/sections', handleGetAllSectionUsers);
sectionRouter.get('/section', handleGetAll);
sectionRouter.get('/section/:id', handleGetOne);
sectionRouter.post('/sections', handleuserCreate);
sectionRouter.post('/section', handleCreate);
sectionRouter.put('/section/:id', handleUpdate);
sectionRouter.delete('/section/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await sectionCollection.read();
  res.status(200).json(allRecords);
}
async function handleGetAllSectionUsers(req, res) {
  let allRecords = await sectionsModel.findAll({ include:{model:usersModel,right:true}});
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await sectionCollection.findOne(id)
  res.status(200).json(theRecord);
}

async function handleuserCreate(req, res) {
  let obj = req.body;
  let newRecord = await userSectionModel.create({sectionId:2,userId:1});
  res.status(201).json(newRecord);
}
async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await sectionCollection.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await sectionCollection.update(obj,id)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await sectionCollection.delete(id);
  res.status(204).json(deletedRecord);
}


module.exports = sectionRouter;
