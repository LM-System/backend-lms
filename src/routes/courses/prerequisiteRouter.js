'use strict'
const express = require('express');
const prerequisiteRouter = express.Router();
const {coursesModel, prerequisiteModel} = require('../../model/relations');

// post course prerequisite courses
prerequisiteRouter.post('/courseprerequisite', async (req, res,next) => {
  try{
  const obj = req.body
  const record = await prerequisiteModel.create(obj)
  res.status(201).json(record)
} catch (e){next(e)}
})

// get course prerequisite courses
prerequisiteRouter.get('/course/:course_id/prerequisite', async (req, res,next) => {
  try{
  const course_id = req.params.course_id
  const record = await coursesModel.findOne({
    where: {
      id: course_id
    },
    include: {
      all:true
    }
  },)
  if(record) {
    res.status(200).json(record)
  } else {
    res.status(204).json({
      status: 204,
      msg: 'Course has no prerequisites'
    })
  }
} catch (e){next(e)}
})


module.exports = prerequisiteRouter