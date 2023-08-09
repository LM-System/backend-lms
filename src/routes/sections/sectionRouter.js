'use strict'
// section router
const express = require('express');
const sectionRouter = express.Router();
const {sectionsModel,usersModel, studentSectionModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const sectionCollection =new Collection(sectionsModel);


sectionRouter.get('/section',bearerAuth,acl(['departmentHead','institutionHead']), handleGetAll);
sectionRouter.get('/section/:id',bearerAuth,acl(['departmentHead','institutionHead']), handleGetOne);
sectionRouter.post('/section',bearerAuth,acl(['departmentHead','institutionHead']), handleCreate);
sectionRouter.put('/section/:id',bearerAuth,acl(['departmentHead','institutionHead']), handleUpdate);
sectionRouter.delete('/section/:id',bearerAuth,acl(['departmentHead','institutionHead']), handleDelete);
sectionRouter.get('/classlist/:id',bearerAuth,acl(['departmentHead','instructor','student']), handleClasslist);



async function handleClasslist(req, res,next) {
  try{
    const id = req.params.id;
    let allRecords = await sectionsModel.findOne({
      where: {
        id: id
      }, include: {
        model: studentSectionModel,
        attributes: ['userId'],
        include: {
          model: usersModel,
          attributes: ['id', 'username', 'email'],
        },
    }});
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
