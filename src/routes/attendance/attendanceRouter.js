'use strict'
const express = require('express');
const attendanceRouter = express.Router();
const {attendanceModel, sectionsModel, userAttendanceModel} = require('../../model/relations');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');


// Get all attendance records for a specific section
attendanceRouter.get('/course/:section_id/attendance',bearerAuth, async (req, res) => {
  try{
  const sectionId = req.params.section_id
  const record = await attendanceModel.findAll({
    where: {
      section_id: sectionId
    },
    include: {
      model: 'section_attendance'
    }
  })
  res.status(200).json(record)
} catch (e){next(e)}
})


// Get attendance for a specific day
attendanceRouter.get('/course/:section_id/attendance/:attendance_id',bearerAuth,async (req, res) => {
  try{
  const sectionId = req.params.section_id
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.findAll({
    where: {
      attendance_id: attendanceId,
      section_id: sectionId
    },
    include: [
    { model: sectionsModel },
    { model: userAttendanceModel }
  ]
  })
  if(req.body.user.role === 'student') {
    const studentRecord = record.filter(e => e.user_id = req.body.user.user_id)
    res.status(200).json(studentRecord)
  } else res.status(200).json(record)
} catch (e){next(e)}
})

// Creating new attendance
attendanceRouter.post('/course/:section_id/attendance',bearerAuth, async(req, res) => {
  try{
  const attendanceData = req.body
  const sectionId = req.params.section_id
  const record = await attendanceModel.create({
    ...attendanceData,
    section_id: sectionId,
  })
  res.status(201).json(record)
} catch (e){next(e)}
})

// Teacher removes attendance for a specific day
attendanceRouter.delete('/course/:section_id/attendance/:attendance_id',bearerAuth, async(req, res) => {
  try{
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.destroy({
    where: {
      attendance_id: attendanceId
    }
  })
  res.status(204).json(record)
} catch (e){next(e)}
})


// Update attendance information for a specific day
attendanceRouter.put('/course/:section_id/attendance/:attendance_id',bearerAuth, async(req, res) => {
  try{
  const updateData = req.body
  const attendanceId = req.params.attendance_id
  const record = await attendanceModel.update({
    where: {
      attendance_id: attendanceId
    }
  }, updateData)
  res.status(200).json(record)
} catch (e){next(e)}
})


module.exports = attendanceRouter