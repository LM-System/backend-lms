const express = require('express');
const institutionRouter = express.Router();
const { Op } = require("sequelize")
const { institutionModel,usersModel,departmentsModel } = require('../../model');

institutionRouter.get('/institutions', handleGetAll);
institutionRouter.get('/institution/:name', handleGetOne);
institutionRouter.get('/institutiondepartments/:id', handleGetinstitutiondepartments);
institutionRouter.get('/institutionemployees/:id', handleGetinstitutionemployees);
institutionRouter.get('/institutionstudents/:id', handleGetinstitutionstudents);
institutionRouter.post('/institution', handleCreate);
institutionRouter.put('/institution/:id', handleUpdate);
institutionRouter.delete('/institution/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await institutionModel.findAndCountAll();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const name = req.params.name;
  let theRecord = await institutionModel.findAll({where:{name:name}})
  res.status(200).json(theRecord);
}

async function handleGetinstitutiondepartments(req, res) {
  const id = req.params.id;
  let theRecord = await departmentsModel.findAndCountAll({where:{institution_id:id}})
  res.status(200).json(theRecord);
}

async function handleGetinstitutionstudents(req, res) {
  const id = req.params.id;
  let theRecord = await usersModel.findAndCountAll({where:{institution_id:id,role:'student'}})
  res.status(200).json(theRecord);
}

async function handleGetinstitutionemployees(req, res) {
  const id = req.params.id;
  let theRecord = await usersModel.findAndCountAll({where:[{institution_id:id},{[Op.not]: 
    { role: ['student','admin','institution'] },
}]})
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