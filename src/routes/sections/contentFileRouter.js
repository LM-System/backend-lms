'use strict'
const express = require('express');
const contentFileRouter = express.Router();
const {sectionsModel,contentFileModel}= require('../../model/relations')
const multer = require("multer");
const path = require("path");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
/// Attach file to content

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "assets");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extname = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + extname);
    },
  });
  
  const upload = multer({ storage });
///

contentFileRouter.get('/contentfile/:id',bearerAuth,acl(['instructor','departmentHead']), handleGetOne);
contentFileRouter.post('/contentfile',bearerAuth,acl(['instructor','departmentHead']),upload.single("file"), handleCreate);
contentFileRouter.put('/contentfile/:id',bearerAuth,acl(['instructor','departmentHead']), handleUpdate);
contentFileRouter.delete('/contentfile/:id',bearerAuth,acl(['instructor','departmentHead']), handleDelete);


  
  async function handleGetOne(req, res,next) {
    try{
    const id = req.params.id;
    let theRecord = await contentFileModel.findOne({where:{id:id},include:{all:true}})
    res.status(200).json(theRecord);
  } catch (e){next(e)}
  }

  async function handleCreate(req, res,next) {
    try{
    const attachmentUrl = req.file ? req.file.path : null;
    let obj = req.body;
    let newRecord = await contentFileModel.create({...obj,file:attachmentUrl});
    res.status(201).json(newRecord);
  } catch (e){next(e)}
  }

  async function handleUpdate(req, res,next) {
    try{
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await contentFileModel.findOne({where:{id:id}})
    res.status(200).json(await updatedRecord.update(obj));
  } catch (e){next(e)}
  }

  async function handleDelete(req, res,next) {
    try{
    let id = req.params.id;
    let deletedRecord = await contentFileModel.destroy({where:{id:id}});
    res.status(204).json(deletedRecord);
  } catch (e){next(e)}
  }

  module.exports = contentFileRouter;
