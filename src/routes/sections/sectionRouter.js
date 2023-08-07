'use strict'
// section router
const express = require('express');
const sectionRouter = express.Router();
const {sectionsModel,usersModel, studentSectionModel}= require('../../model/relations')
const Collection = require("../../model/collection");
const sectionCollection =new Collection(sectionsModel);


sectionRouter.get('/section', handleGetAll);
sectionRouter.get('/section/:id', handleGetOne);
sectionRouter.post('/section', handleCreate);
sectionRouter.put('/section/:id', handleUpdate);
sectionRouter.delete('/section/:id', handleDelete);
sectionRouter.get('/classlist/:id', handleClasslist);



async function handleClasslist(req, res) {
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
  }

async function handleGetAll(req, res) {
    let allRecords = await sectionCollection.read();
    res.status(200).json(allRecords);
  }
  
  async function handleGetOne(req, res) {
    const id = req.params.id;
    let theRecord = await sectionCollection.read(id)
    res.status(200).json(theRecord);
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
