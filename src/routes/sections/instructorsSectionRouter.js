const express = require('express');
const instructorsSectionsRouter = express.Router();
const {usersModel, sectionsModel, instructorsModel} = require('../../model/relations')
const Collection = require("../../model/collection");
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');


instructorsSectionsRouter.get('/instructorSections',bearerAuth,acl(['instructor',"instructorDepartmentHead","admin"]), handleGetAll);
instructorsSectionsRouter.get('/instructorSections/:id',bearerAuth,acl(['instructor',"instructorDepartmentHead","admin"]), handleGetOne);


async function handleGetAll(req, res,next) {
  try{
  let allRecords = await instructorsModel.findAll({
  include:{
    model:sectionsModel,
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
  include:{
    model:sectionsModel,
  }
});
  res.status(201).json(newRecord);
} catch (e){next(e)}
}



module.exports = instructorsSectionsRouter;