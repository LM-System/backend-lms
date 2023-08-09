'use strict'
const express = require('express');
const contentRouter = express.Router();
const {sectionsModel,contentModel, contentFileModel}= require('../../model/relations')



contentRouter.get('/content/:id', handleGetOne);
contentRouter.get('/contentFiles/:id', handleGetcontentFiles);
contentRouter.post('/content', handleCreate);
contentRouter.put('/content/:id', handleUpdate);
contentRouter.delete('/content/:id', handleDelete);


  
  async function handleGetOne(req, res) {
    const id = req.params.id;
    let theRecord = await contentModel.findOne({where:{id:id},include:{all:true}})
    res.status(200).json(theRecord);
  }
  async function handleGetcontentFiles(req, res) {
    const id = req.params.id;
    let theRecord = await contentFileModel.findAndCountAll({where:{content_id:id}})
    res.status(200).json(theRecord);
  }
  
  async function handleCreate(req, res) {
    let obj = req.body;
    let newRecord = await contentModel.create(obj);
    res.status(201).json(newRecord);
  }
  
  async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await contentModel.findOne({where:{id:id}})
    res.status(200).json(await updatedRecord.update(obj));
  }
  
  async function handleDelete(req, res) {
    let id = req.params.id;
    let deletedRecord = await contentModel.destroy({where:{id:id}});
    res.status(204).json(deletedRecord);
  }
  module.exports = contentRouter;
