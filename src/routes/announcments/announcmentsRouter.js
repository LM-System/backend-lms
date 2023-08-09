const express = require('express');
const announcementRouter = express.Router();
const {announcementModel, coursesModel} = require('../../model/relations');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')

announcementRouter.get('/institutionannouncements/:id',bearer,handleGetAll);
announcementRouter.post('/announcement',bearer,acl(['institutionHead']), handleCreate);
announcementRouter.put('/announcement/:id',bearer,acl(['institutionHead']), handleUpdate);
announcementRouter.delete('/announcement/:id',bearer,acl(['institutionHead']), handleDelete);


async function handleGetAll(req, res,next) {
  try{
    let newRecord = await announcementModel.findAll({where:{institution_id:req.params.id},
    attributes:['title','body']});
    res.status(200).json(newRecord);
  } catch (e){next(e)}
}
async function handleCreate(req, res,next) {
  try{
  let obj = req.body;
  let newRecord = await announcementModel.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}


async function handleUpdate(req, res,next) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await announcementModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

async function handleDelete(req, res,next) {
  try{
  let id = req.params.id;
  let deletedRecord = await announcementModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = announcementRouter;