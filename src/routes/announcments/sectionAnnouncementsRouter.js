const express = require('express');
const sectionAnnouncementRouter = express.Router();
const {sectionِAnnouncementModel} = require('../../model/relations');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const specificity = require('../../auth/middleware/specificity.auth')
const head = require('../../auth/middleware/head')

sectionAnnouncementRouter.get('/sectionAnnouncements/:sectionId',bearer, handleGetAnnoucementsforOneSection);
sectionAnnouncementRouter.post('/sectionAnnouncement',bearer,acl(["instructorDepartmentHead",'instructor']), handleCreate);
sectionAnnouncementRouter.put('/sectionAnnouncement/:id',bearer,acl(["instructorDepartmentHead",'instructor']), handleUpdate);
sectionAnnouncementRouter.delete('/sectionAnnouncement/:id',bearer,acl(["instructorDepartmentHead",'instructor']), handleDelete);


async function handleGetAnnoucementsforOneSection(req, res,next) {
  try{
  let newRecord = await sectionِAnnouncementModel.findAll({where:{sectionId:req.params.sectionId}});
  res.status(200).json(newRecord);
} catch (e){next(e)}
}


async function handleCreate(req, res,next) {
  try{
  let obj = req.body;
  let newRecord = await sectionِAnnouncementModel.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleUpdate(req, res,next) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await sectionِAnnouncementModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}


async function handleDelete(req, res,next) {
  try{
  let id = req.params.id;
  let deletedRecord = await sectionِAnnouncementModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = sectionAnnouncementRouter;