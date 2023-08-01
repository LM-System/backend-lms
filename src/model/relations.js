'use strict'
const {
  usersModel,
  coursesModel,
  departmentsModel,
  studentSectionModel,
  institutionModel,
  sectionsModel,
  sectionِAnnouncementModel,
  contentModel,
  contentFileModel,
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
  
  } = require('./index')

// Users section Relations


usersModel.belongsToMany(sectionsModel,{
  through: studentSectionModel
})
sectionsModel.belongsToMany(usersModel,{
  through: studentSectionModel
})


usersModel.hasMany(sectionsModel, {
  foreignKey: 'instructor_id'
});

sectionsModel.belongsTo(usersModel, {
  foreignKey: 'instructor_id'
});
// Courses section Relations
coursesModel.hasMany(sectionsModel, {
  foreignKey: 'course_id'
});

sectionsModel.belongsTo(coursesModel, {
  foreignKey: 'course_id'
});
// Courses Relations

// Department Relations

// Institution Relations
institutionModel.hasMany(departmentsModel, {
  foreignKey: 'institution_id'
});

departmentsModel.belongsTo(institutionModel, {
  foreignKey: 'institution_id'
});

// Sections Relations
sectionsModel.hasOne(contentModel, {
  foreignKey: 'section_id'
});

contentModel.belongsTo(sectionsModel, {
  foreignKey: 'section_id'
});
// Content Relations

// ContentFile Relations

// Prerequest Relations

// Attendance Relations

// Assignment Relations

// Announcement Relations


module.exports = {
  usersModel,
  coursesModel,
  departmentsModel,
  institutionModel,
  sectionsModel,
  sectionِAnnouncementModel,
  contentModel,
  contentFileModel,
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
  studentSectionModel
}