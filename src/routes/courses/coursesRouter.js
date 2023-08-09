const express = require('express');
const coursesRouter = express.Router();
const {departmentsModel, coursesModel,sectionsModel} = require('../../model/relations');
const acl = require('../../auth/middleware/acl.auth')
const bearer = require('../../auth/middleware/bearer.auth')
const specificity = require('../../auth/middleware/specificity.auth')
const head = require('../../auth/middleware/head')

// coursesRouter.get('/courses', handleGetAll);
coursesRouter.get('/course/:id',bearer,acl(['institutionHead','departmentHead','instructor']), handleGetOne);
coursesRouter.get('/coursesections/:id',bearer,acl(['institutionHead','departmentHead','instructor']), handleGetcourseSections);
coursesRouter.get('/courseprerequisite/:id',bearer,acl(['institutionHead','departmentHead','instructor']), handleGetcourseprerequisite);
coursesRouter.post('/course',bearer,acl(['institutionHead','departmentHead']), handleCreate);
coursesRouter.put('/course/:id',bearer,acl(['institutionHead','departmentHead','instructor']), handleUpdate);
coursesRouter.delete('/course/:id',bearer,acl(['institutionHead','departmentHead']), handleDelete);

// async function handleGetAll(req, res) {
//   let allRecords = await coursesModel.findAll({include:{all:true}});
//   res.status(200).json(allRecords);
// }

async function handleGetOne(req, res,next) {
  try{
  const id = req.params.id;
  let theRecord = await coursesModel.findOne({where:{id:id},
    attributes:['name','description','syllabus','start_date','end_date'],
    include:{model:departmentsModel,attributes:["id",'name',]}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleGetcourseSections(req, res,next) {
  try{
  const id = req.params.id;
  let theRecord = await sectionsModel.findAndCountAll({where:{course_id:id},
    attributes:['name','year','semester','room_no','status','building','days','capacity'],
    })
  res.status(200).json(theRecord);
} catch (e){next(e)}
}


async function handleGetcourseprerequisite(req, res,next) {
  try{
  const id = req.params.id;
  let theRecord = await coursesModel.findAndCountAll({where:{prerequisite_id:id}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}

async function handleCreate(req, res,next) {
  try{
  let obj = req.body;
  let newRecord = await coursesModel.create(obj);
  res.status(201).json(newRecord);
} catch (e){next(e)}
}

async function handleUpdate(req, res,next) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await coursesModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

async function handleDelete(req, res,next) {
  try{
  let id = req.params.id;
  let deletedRecord = await coursesModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}


module.exports = coursesRouter;