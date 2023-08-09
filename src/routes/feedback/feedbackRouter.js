const express = require('express');
const feedbackRouter = express.Router();
const {feedbackModel} = require('../../model/relations');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const fs = require('fs');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });


feedbackRouter.get('/sectionfeedbacks/:id',bearer,acl(['institutionHead','departmentHead','instructor']),handleGetAll);
feedbackRouter.post('/feedback',bearer,acl(['student']),upload.single("form"), handleCreate);
feedbackRouter.put('/feedback/:id',bearer,acl(['student']), handleUpdate);
feedbackRouter.delete('/feedback/:id',bearer,acl(['institutionHead','departmentHead']), handleDelete);


async function handleGetAll(req, res) {
  try{
  let newRecord = await feedbackModel.findAndCountAll({where:{section_id:req.params.id}});
  res.status(200).json(newRecord);
} catch (e){next(e)}
}

async function handleCreate(req, res) {
  try{
  const fileBuffer = fs.readFileSync(req.file.path);
  const fileBase64String = fileBuffer.toString('base64');
  let obj = req.body;
  let newRecord = await feedbackModel.create({...obj,form:fileBase64String});
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleUpdate(req, res) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await feedbackModel.findOne({where:{id:id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

async function handleDelete(req, res) {
  try{
  let id = req.params.id;
  let deletedRecord = await feedbackModel.destroy({where:{id:id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = feedbackRouter;