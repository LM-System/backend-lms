'use strict'
const express = require('express');
const attendanceRouter = express.Router();
const {attendanceModel, sectionsModel, usersModel} = require('../../model/relations');

// Get all attendance records for a specific section
attendanceRouter.get('/course/section_id/attendance', async (req, res) => {
  const sectionId = req.params.section_id
  const record = await attendanceModel.findAll({
    where: {
      section_id: sectionId
    },
    include: [{
      model: sectionsModel
    }]
  })
  res.status(200).json(record)
})

// Student: Get attendance for a specific day
attendanceRouter.get('/course/:section_id/attendance/:attendance_id', async (req, res) => {
  const sectionId = req.params.section_id
  const attendanceId = req.params.attendance_id
  const student_id = req.body.user_id
  const record = await attendanceModel.findOne({
    where: {
      id: attendanceId,
      section_id: sectionId,
      user_id: student_id
    },
    include: [{
      model: sectionsModel,
      model: usersModel
    }]
  })
  res.status(200).json(record)
})

// Techer: Get attendance for a specific day
attendanceRouter.get('/course/:section_id/attendance/:attendance_id', async (req, res) => {
  const sectionId = req.params.section_id
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.findAll({
    where: {
      id: attendanceId,
      section_id: sectionId
    },
    include: [{
      model: sectionsModel
    },
    {
      model: usersModel
    }]
  })
  res.status(200).json(record)
})

// Creating new attendance
attendanceRouter.post('/course/:section_id/attendance', async(req, res) => {
  const attendanceData = req.body
  const sectionId = req.params.section_id
  const record = await attendanceModel.create({
    ...attendanceData,
    section_id: sectionId,
  })
  res.status(201).json(record)
})

// Teacher removes attendance for a specific day
attendanceRouter.delete('/course/:section_id/attendance/:attendance_id', async(req, res) => {
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.destroy({
    where: {
      attendance_id: attendanceId
    }
  })
  res.status(204).json(record)
})

// Update attendance information for a specific day
attendanceRouter.put('/course/:section_id/attendance/:attendance_id', async(req, res) => {
  const updateData = req.body
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.update({
    where: {
      attendance_id: attendanceId
    }
  }, updateData)
  res.status(200).json(record)
})

module.exports = attendanceRouter