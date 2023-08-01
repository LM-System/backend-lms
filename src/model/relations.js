const {
  usersModel,
  coursesModel,
  departmentsModel,
  instructorsCoursesModel,
  studentsCoursesModel,
  institutionModel,
  sectionsModel,
  sectionِAnnouncementModel,
  contentModel,
  contentFileModel,
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel
  } = require('./index')

// Users Relations

// Courses Relations

// Department Relations
departmentsModel.belongsTo(usersModel,{
  foreignKey:'user_id',
  as:'department_head'
})  //zay
// Institution Relations

// Sections Relations

// Content Relations

// ContentFile Relations
contentFileModel.belongsTo(sectionsModel,{
  foreignKey:'content_id'
})   //zay
// Prerequest Relations

// Attendance Relations

// Assignment Relations

// Announcement Relations
announcementModel.belongsTo(institutionModel,{
  foreignKey:'institution_id'
})   //zay
//sectionAnnouncment Relation
sectionِAnnouncementModel.belongsTo(sectionsModel,{
  foreignKey:'section_id'
})   //zay

module.exports = {
  usersModel,
  coursesModel,
  departmentsModel,
  studentsCoursesModel,
  instructorsCoursesModel,
  institutionModel,
  sectionsModel,
  sectionِAnnouncementModel,
  contentModel,
  contentFileModel,
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel
}