const express = require('express');
const instructorsSectionsRouter = express.Router();
const {usersModel, sectionsModel} = require('../../model/relations')
const Collection = require("../../model/collection");
const userCollection = new Collection(usersModel)


instructorsSectionsRouter.get('/instructorSection', handleGetAll);
instructorsSectionsRouter.get('/instructorSection/:id', handleGetOne);


async function handleGetAll(req, res) {
  let allRecords = await usersModel.findAll({where:{
    role:'instructor',
  },
  attributes:['id','username','email','role','institution_id','department_id'],
  include:{
    model:sectionsModel,
    attributes:['id','name','course_id','year','semester','room_no','status','building','days'],
  }
});
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
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
}



module.exports = instructorsSectionsRouter;