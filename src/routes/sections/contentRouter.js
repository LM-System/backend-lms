'use strict'
const express = require('express');
const contentRouter = express.Router();
const {contentModel, contentFileModel, coursesModel}= require('../../model/relations')
const bearer = require("../../auth/middleware/bearer.auth");
const acl = require('../../auth/middleware/acl.auth');


contentRouter.get('/sectioncontents/:courseId',bearer,acl(['instructor','instructorDepartmentHead']), handleGetSectionContents);
contentRouter.get('/content/:id',bearer,acl(['instructor','instructorDepartmentHead']), handleGetOne);
contentRouter.get('/contentFiles/:id',bearer, handleGetcontentFiles);
contentRouter.post('/content',bearer,acl(['instructor','instructorDepartmentHead']), handleCreate);
contentRouter.put('/content/:id',bearer,acl(['instructor','instructorDepartmentHead']), handleUpdate);
contentRouter.delete('/content/:id',bearer,acl(['instructor','instructorDepartmentHead']), handleDelete);



  async function handleGetSectionContents(req, res,next) {
    try{
    const id = req.params.courseId;
    let theRecord = await coursesModel.findOne({where:{id:id},include:{model:contentModel}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }
  async function handleGetOne(req, res,next) {
    try{
    const id = req.params.id;
    let theRecord = await contentModel.findOne({where:{id:id},include:{all:true}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleGetcontentFiles(req, res,next) {
    try{
    const id = req.params.id;
    let theRecord = await contentFileModel.findAndCountAll({where:{content_id:id}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleCreate(req, res,next) {
    try{
    let obj = req.body;
    let newRecord = await contentModel.create(obj);
    res.status(201).json(newRecord);
  } catch (e){next(e)}
  }

  async function handleUpdate(req, res,next) {
    try{
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await contentModel.findOne({where:{id:id}})
    res.status(200).json(await updatedRecord.update(obj));
  } catch (e){next(e)}
  }

  async function handleDelete(req, res,next) {
    try{
    let id = req.params.id;
    let deletedRecord = await contentModel.destroy({where:{id:id}});
    res.status(204).json(deletedRecord);
  } catch (e){next(e)}
  }

  module.exports = contentRouter;
