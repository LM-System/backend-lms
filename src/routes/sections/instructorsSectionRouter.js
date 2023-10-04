const express = require('express');
const instructorsSectionsRouter = express.Router();
const {usersModel, sectionsModel, instructorsModel} = require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const userCollection = new Collection(usersModel)


instructorsSectionsRouter.get('/instructorSection',bearerAuth,acl(['instructor',"instructorDepartmentHead"]), handleGetAll);
instructorsSectionsRouter.get('/instructorSection/:id',bearerAuth,acl(['instructor',"instructorDepartmentHead"]), handleGetOne);


async function handleGetAll(req, res,next) {
  try{
  let allRecords = await instructorsModel.findAll({
  include:{
    model:sectionsModel,
    attributes:['id','name','courseId','year','semester','room_no','status','building','days',"start_time","end_time"],
  }
})
  res.status(200).json(allRecords);
} catch (e){next(e)}
}


async function handleGetOne(req, res,next) {
  try{
  let id = req.params.id;
  let newRecord = await instructorsModel.findOne({where:{
    id:id
  },
  attributes:['id','fullname','userEmail','department_id'],
  include:{
    model:sectionsModel,
    attributes:['id','name','courseId','year','semester','room_no','status','building','days',"start_time","end_time"],
  }
});
  res.status(201).json(newRecord);
} catch (e){next(e)}
}



module.exports = instructorsSectionsRouter;