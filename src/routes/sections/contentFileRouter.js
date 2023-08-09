'use strict'
const express = require('express');
const contentFileRouter = express.Router();
const {sectionsModel,contentFileModel}= require('../../model/relations')
const multer = require("multer");
const path = require("path");
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

contentFileRouter.get('/contentfile/:id', handleGetOne);
contentFileRouter.post('/contentfile',upload.single("file"), handleCreate);
contentFileRouter.put('/contentfile/:id', handleUpdate);
contentFileRouter.delete('/contentfile/:id', handleDelete);


  
  async function handleGetOne(req, res) {
    const id = req.params.id;
    let theRecord = await contentFileModel.findOne({where:{id:id},include:{all:true}})
    res.status(200).json(theRecord);
  }
  
  async function handleCreate(req, res) {
    const attachmentUrl = req.file ? req.file.path : null;
    let obj = req.body;
    let newRecord = await contentFileModel.create({...obj,file:attachmentUrl});
    res.status(201).json(newRecord);
  }
  
  async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await contentFileModel.findOne({where:{id:id}})
    res.status(200).json(await updatedRecord.update(obj));
  }
  
  async function handleDelete(req, res) {
    let id = req.params.id;
    let deletedRecord = await contentFileModel.destroy({where:{id:id}});
    res.status(204).json(deletedRecord);
  }
  module.exports = contentFileRouter;
