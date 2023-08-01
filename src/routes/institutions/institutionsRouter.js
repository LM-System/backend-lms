const express = require('express');
const institutionRouter = express.Router();
const {institutionRouter} = require('../model/relations');
const { institutionModel } = require('../../model');

institutionRouter.get('/institutions', handleGetAll);
institutionRouter.get('/institution/:id', handleGetOne);
institutionRouter.post('/institution', handleCreate);
institutionRouter.put('/institution/:id', handleUpdate);
institutionRouter.delete('/institution/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await institutionModel.findAll({include:{all:true}});
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await institutionModel.findOne({where:{id:id},attributes:['name','description','start_date','end_date'],include:[{model:usersModel,as:'students',attributes:['username','email','gender','birth_date','role']},{model:usersModel,as:'instructor',attributes:['username','email','gender','birth_date','role']}]})
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await institutionModel.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await institutionModel.findOne({where:{id}}).update(obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await institutionModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
}


module.exports = institutionRouter;