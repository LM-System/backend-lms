'use strict'
const express = require('express');
const contentRouter = express.Router();
const {sectionsModel,contentModel, contentFileModel}= require('../../model/relations')
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');


contentRouter.get('/content/:id',bearerAuth,acl(['instructor','departmentHead']), handleGetOne);
contentRouter.get('/contentFiles/:id',bearerAuth, handleGetcontentFiles);
contentRouter.post('/content',bearerAuth,acl(['instructor','departmentHead']), handleCreate);
contentRouter.put('/content/:id',bearerAuth,acl(['instructor','departmentHead']), handleUpdate);
contentRouter.delete('/content/:id',bearerAuth,acl(['instructor','departmentHead']), handleDelete);


  
  async function handleGetOne(req, res) {
    try{
    const id = req.params.id;
    let theRecord = await contentModel.findOne({where:{id:id},include:{all:true}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleGetcontentFiles(req, res) {
    try{
    const id = req.params.id;
    let theRecord = await contentFileModel.findAndCountAll({where:{content_id:id}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleCreate(req, res) {
    try{
    let obj = req.body;
    let newRecord = await contentModel.create(obj);
    res.status(201).json(newRecord);
  } catch (e){next(e)}
  }

  async function handleUpdate(req, res) {
    try{
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await contentModel.findOne({where:{id:id}})
    res.status(200).json(await updatedRecord.update(obj));
  } catch (e){next(e)}
  }

  async function handleDelete(req, res) {
    try{
    let id = req.params.id;
    let deletedRecord = await contentModel.destroy({where:{id:id}});
    res.status(204).json(deletedRecord);
  } catch (e){next(e)}
  }

  module.exports = contentRouter;
