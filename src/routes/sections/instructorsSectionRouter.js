const express = require('express');
const instructorsSectionsRouter = express.Router();
const {usersModel, sectionsModel} = require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const userCollection = new Collection(usersModel)


instructorsSectionsRouter.get('/instructorSection',bearerAuth,acl('instructor'), handleGetAll);
instructorsSectionsRouter.get('/instructorSection/:id',bearerAuth,acl('instructor'), handleGetOne);


async function handleGetAll(req, res,next) {
  try{
  let allRecords = await usersModel.findAll({where:{
    role:'instructor',
  },
  attributes:['id','username','email','role','institution_id','department_id'],
  include:{
    model:sectionsModel,
    attributes:['id','name','course_id','year','semester','room_no','status','building','days'],
  }
})
  res.status(200).json(allRecords);
} catch (e){next(e)}
}


async function handleGetOne(req, res,next) {
  try{
  let id = req.params.id;
  let newRecord = await usersModel.findOne({where:{
    role:'instructor',
    id:id
  },
  attributes:['id','username','email','role','institution_id','department_id'],
  include:{
    model:sectionsModel,
    attributes:['id','name','course_id','year','semester','room_no','status','building','days'],
  }
});
  res.status(201).json(newRecord);
} catch (e){next(e)}
}



module.exports = instructorsSectionsRouter;