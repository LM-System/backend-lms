'use strict'
const multer = require("multer");
const path = require("path");
const express = require('express');
const contentRouter = express.Router();
const {contentModel, contentFileModel, coursesModel}= require('../../model/relations')
const bearer = require("../../auth/middleware/bearer.auth");
const acl = require('../../auth/middleware/acl.auth');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage });


contentRouter.get('/sectioncontents/:courseId',bearer, handleGetSectionContents);
contentRouter.get('/content/:id',bearer, handleGetOne);
contentRouter.get('/contentFiles/:id',bearer, handleGetcontentFiles);
contentRouter.post('/content',/*bearer,acl(['instructor','instructorDepartmentHead']),*/  upload.single("contentFile"), handleCreate);
contentRouter.put('/content/:id',bearer,acl(['instructor','instructorDepartmentHead']), handleUpdate);
contentRouter.delete('/content/:id',bearer,acl(['instructor','instructorDepartmentHead']), handleDelete);



  async function handleGetSectionContents(req, res,next) {
    try{
    const id = req.params.courseId;
    let theRecord = await coursesModel.findOne({where:{id:id},include:{model:contentModel}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }
  async function handleGetAllForSection(req, res,next) {
    try{
    const id = req.params.id;
    let theRecord = await contentModel.findOne({where:{sectionId:id},include:{all:true}})
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
    const attachment=req.file ? req.file.path : null;
    console.log(req.body);
    obj.file=attachment;
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
