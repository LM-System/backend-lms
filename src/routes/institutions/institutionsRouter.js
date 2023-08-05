const express = require('express');
const institutionRouter = express.Router();
const { Op } = require("sequelize")
const { institutionModel,usersModel,departmentsModel } = require('../../model');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const specificity = require('../../auth/middleware/specificity.auth')

institutionRouter.get('/institutions',bearer,acl(['admin']), handleGetAll);
institutionRouter.get('/institution/:name',bearer,acl(['admin']), handleGetOne);
institutionRouter.get('/institutiondepartments/:id',bearer,acl(['institution']),specificity('institutionHeader'), handleGetinstitutiondepartments);
institutionRouter.get('/institutionemployees/:id',bearer,acl(['institution']),specificity('institutionHeader'), handleGetinstitutionemployees);
institutionRouter.get('/institutionstudents/:id',bearer,acl(['institution']),specificity('institutionHeader'), handleGetinstitutionstudents);
institutionRouter.post('/institution',bearer,acl(['admin']), handleCreate);
institutionRouter.put('/institution/:id',bearer,acl(['admin','institution']),specificity('institutionHeader'), handleUpdate);
institutionRouter.delete('/institution/:id',bearer,acl(['admin']), handleDelete);

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
  let theRecord = await usersModel.findAndCountAll({where:{institution_id:id,role:'student'},attributes:['id','username','email','gender','birth_date','phone_number','image','address']})
  res.status(200).json(theRecord);
}

async function handleGetinstitutionemployees(req, res) {
  const id = req.params.id;
  let theRecord = await usersModel.findAndCountAll({where:[{institution_id:id},{[Op.not]: 
    { role: ['student','admin','institution'] },
}],attributes:['id','username','email','gender','birth_date','phone_number','role','image','address']})
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
  let updatedRecord = await institutionModel.findOne({where:{id:id}})
  res.status(200).json(await updatedRecord.update(obj));
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await institutionModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
}


module.exports = institutionRouter;