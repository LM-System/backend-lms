const express = require('express');
const institutionRouter = express.Router();
const { Op } = require("sequelize")
const { institutionModel,usersModel,departmentsModel } = require('../../model');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const specificity = require('../../auth/middleware/specificity.auth')
const head = require('../../auth/middleware/head')

institutionRouter.get('/institutions',bearer,acl(['superAdmin']), handleGetAll);
institutionRouter.get('/institution/:name',bearer,acl(['superAdmin']), handleGetOne);
institutionRouter.get('/institutiondepartments/:id',bearer,acl(['institutionHead']),specificity('institutionHeader'), handleGetinstitutiondepartments);
institutionRouter.get('/institutionemployees/:id',bearer,acl(['institutionHead']),specificity('institutionHeader'), handleGetinstitutionemployees);
institutionRouter.get('/institutionstudents/:id',bearer,acl(['institutionHead']),specificity('institutionHeader'), handleGetinstitutionstudents);
institutionRouter.post('/institution',bearer,acl(['superAdmin']),head('institutionHead'), handleCreate);
institutionRouter.put('/institution/:id',bearer,acl(['superAdmin','institutionHead']),specificity('institutionHeader'), handleUpdate);
institutionRouter.delete('/institution/:id',bearer,acl(['superAdmin']), handleDelete);

async function handleGetAll(req, res) {
  try{
  let allRecords = await institutionModel.findAndCountAll();
  res.status(200).json(allRecords);
} catch (e){next(e)}
}

async function handleGetOne(req, res) {
  try{
  const name = req.params.name;
  let theRecord = await institutionModel.findAll({where:{name:name}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleGetinstitutiondepartments(req, res) {
  try{
  const id = req.params.id;
  let theRecord = await departmentsModel.findAndCountAll({where:{institution_id:id}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleGetinstitutionstudents(req, res) {
  try{
  const id = req.params.id;
  let theRecord = await usersModel.findAndCountAll({where:{institution_id:id,role:'student'},attributes:['id','username','email','gender','birth_date','phone_number','image','address']})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleGetinstitutionemployees(req, res) {
  try{
  const id = req.params.id;
  let theRecord = await usersModel.findAndCountAll({where:[{institution_id:id},{[Op.not]: 
    { role: ['student','superAdmin','institutionHead'] },
}],attributes:['id','username','email','gender','birth_date','phone_number','role','image','address']})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleCreate(req, res) {
  try{
  let obj = req.body;
  let newRecord = await institutionModel.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleUpdate(req, res) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await institutionModel.findOne({where:{id:id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

async function handleDelete(req, res) {
  try{
  let id = req.params.id;
  let deletedRecord = await institutionModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = institutionRouter;