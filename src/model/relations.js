const prerequest = require('./courses/prerequisite')
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
  prerequisiteModel,
  attendanceModel,
  assignmentModel,
  announcementModel
  } = require('./index')

// Users Relations
usersModel.hasMany(attendanceModel)
attendanceModel.belongsTo(usersModel, {
  through: 'user_id'
})
// Courses Relations
coursesModel.belongsToMany(coursesModel, { 
  as: 'prerequisite',
  through: "prerequisite_courses",
  foreignKey: 'course_id',
  otherKey: 'prerequisite_id' 
})
// Department Relations

// Institution Relations
institutionModel.hasMany(usersModel)
usersModel.belongsTo(institutionModel, {
  through: 'institution_id'
})
institutionModel.hasOne(usersModel, {
  through: 'user_id'
})
usersModel.belongsTo(institutionModel)

// Content Relations

// ContentFile Relations

// Prerequest Relations

// Attendance Relations
attendanceModel.hasMany(sectionsModel)
sectionsModel.belongsTo(attendanceModel, {
  through: 'attendance_id'
})

// Assignment Relations

// Announcement Relations

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
  prerequisiteModel,
  attendanceModel,
  assignmentModel,
  announcementModel
}