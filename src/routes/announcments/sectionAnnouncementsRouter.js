const express = require('express');
const sectionAnnouncementRouter = express.Router();
const {sectionِAnnouncementModel} = require('../../model/relations');


sectionAnnouncementRouter.get('/sectionAnnouncements/:id', handleGetAnnoucementsforOneSection);
sectionAnnouncementRouter.post('/sectionAnnouncement', handleCreate);
sectionAnnouncementRouter.put('/sectionAnnouncement/:id', handleUpdate);
sectionAnnouncementRouter.delete('/sectionAnnouncement/:id', handleDelete);


async function handleGetAnnoucementsforOneSection(req, res) {
  let newRecord = await sectionِAnnouncementModel.findAll({where:{section_id:req.params.id}});
  res.status(200).json(newRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await sectionِAnnouncementModel.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await sectionِAnnouncementModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await sectionِAnnouncementModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
}


module.exports = sectionAnnouncementRouter;