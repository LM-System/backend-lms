const express = require('express');
const announcementRouter = express.Router();
const {announcementModel, coursesModel} = require('../../model/relations');


announcementRouter.get('/institutionannouncements/:id', handleGetAll);
announcementRouter.post('/announcement', handleCreate);
announcementRouter.put('/announcement/:id', handleUpdate);
announcementRouter.delete('/announcement/:id', handleDelete);


async function handleGetAll(req, res) {
  let newRecord = await announcementModel.findAll({where:{institution_id:req.params.id},
  attributes:['title','body']});
  res.status(200).json(newRecord);
}
async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await announcementModel.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await announcementModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await announcementModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
}


module.exports = announcementRouter;