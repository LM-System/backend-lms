'use strict'
const express = require('express');
const prerequisiteRouter = express.Router();
const {coursesModel, prerequisiteModel} = require('../../model/relations');

// post course prerequisite courses
prerequisiteRouter.post('/course/:course_id/prerequisite/:prerequisite_id', async (req, res) => {
  const course_id = req.params.course_id
  const prerequisite_id = req.params.prerequisite_id
  const record = await prerequisiteModel.create({
    where: {
      course_id: course_id,
      prerequisite_id: prerequisite_id
    },
    include: {
      model: coursesModel,
    }
  },)
  res.status(201).json(record)
})

// get course prerequisite courses
prerequisiteRouter.get('/course/:course_id/prerequisite', async (req, res) => {
  const course_id = req.params.course_id
  const record = await prerequisiteModel.findAll({
    where: {
      course_id: course_id
    },
    include: {
      model: coursesModel,
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
})


module.exports = prerequisiteRouter