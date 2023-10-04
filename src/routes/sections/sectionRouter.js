'use strict'
// section router
const express = require('express');
const sectionRouter = express.Router();
const {sectionsModel,usersModel, studentSectionModel, studentsModel, instructorsModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const sectionCollection =new Collection(sectionsModel);


sectionRouter.get('/section',bearerAuth,acl(['instructorDepartmentHead','admin']), handleGetAll);
sectionRouter.get('/section/:id',bearerAuth,acl(['instructorDepartmentHead','admin']), handleGetOne);
sectionRouter.post('/section',bearerAuth,acl(['instructorDepartmentHead','admin']), handleCreate);
sectionRouter.put('/section/:id',bearerAuth,acl(['instructorDepartmentHead','admin']), handleUpdate);
sectionRouter.delete('/section/:id',bearerAuth,acl(['instructorDepartmentHead','admin']), handleDelete);
sectionRouter.get('/classlist/:id',bearerAuth,acl(['instructorDepartmentHead','instructor','student']), handleClasslist);



async function handleClasslist(req, res,next) {
  try{
    const id = req.params.id;
    let allRecords = await sectionsModel.findOne({
      where: {
        id: id
      }, include: {
        model: studentsModel,
        attributes: ['id','fullname',"email"],
    },include: {
      model: instructorsModel,
      attributes: ['id','fullname',"email"],
  }

  });
    res.status(200).json(allRecords);
  } catch (e){next(e)}
  }

async function handleGetAll(req, res,next) {
  try{
  let allRecords = await sectionCollection.read();
    res.status(200).json(allRecords);
  } catch (e){next(e)}
  }

  async function handleGetOne(req, res,next) {
    try{
    const id = req.params.id;
    let theRecord = await sectionCollection.read(id)
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleCreate(req, res,next) {
    try{
    let obj = req.body;
    let newRecord = await sectionCollection.create(obj);
    res.status(201).json(newRecord);
  } catch (e){next(e)}
  }

  async function handleUpdate(req, res,next) {
    try{
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await sectionCollection.update(obj,id)
    res.status(200).json(updatedRecord);
  } catch (e){next(e)}
  }

  async function handleDelete(req, res,next) {
    try{
    let id = req.params.id;
    let deletedRecord = await sectionCollection.delete(id);
    res.status(204).json(deletedRecord);
  } catch (e){next(e)}
  }

  module.exports = sectionRouter;
