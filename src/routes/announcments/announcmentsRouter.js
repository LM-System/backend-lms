const express = require('express');
const announcementRouter = express.Router();
const {announcementModel, coursesModel} = require('../../model/relations');


announcementRouter.post('/announcement', handleCreate);
announcementRouter.put('/announcement/:id', handleUpdate);
announcementRouter.delete('/announcement/:id', handleDelete);


async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await announcementModel.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await announcementModel.findOne({where:{id}}).update(obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await announcementModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
}


module.exports = announcementRouter;