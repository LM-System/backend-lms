'use strict'
const express = require('express');
const attendanceRouter = express.Router();
const {attendanceModel, sectionsModel, userAttendanceModel} = require('../../model/relations');

const acl = (role) => {
  return (req, res, next) => {
    if(role) {
      if(role === req.user.role) {
        next()
      } else {
        res.status(401).json({
          status: 401,
          msg: 'user not authorized'
        })
      }
    }
  }
}

// Get all attendance records for a specific section
attendanceRouter.get('/course/:section_id/attendance', async (req, res) => {
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
})

// Get attendance for a specific day
attendanceRouter.get('/course/:section_id/attendance/:attendance_id' ,async (req, res) => {
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