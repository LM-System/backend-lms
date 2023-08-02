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
  prerequisiteModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
} = require("./index");

// Users attendance Relations
usersModel.hasMany(attendanceModel)
attendanceModel.belongsTo(usersModel, {
  foreignKey: 'user_id'
})
// Courses prerequisite Relations
coursesModel.belongsToMany(coursesModel, {
  as: 'prerequisite',through: "prerequisite_courses",
  foreignKey: 'course_id',
  otherKey: 'prerequisite_id'
})

// Institution users Relations
institutionModel.hasMany(usersModel,{
  foreignKey: 'institution_id'

})
usersModel.belongsTo(institutionModel, {
  foreignKey: 'institution_id'
})
institutionModel.hasOne(usersModel, {
  foreignKey: 'user_id'
})
usersModel.belongsTo(institutionModel)

// Attendance sections Relations
attendanceModel.hasMany(sectionsModel,{
  foreignKey: 'attendance_id',
})
sectionsModel.belongsTo(attendanceModel, {
  foreignKey: 'attendance_id',
})


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

// Courses department Relations
 
departmentsModel.hasMany(coursesModel, {
  //AbuEssa
  foreignKey: "department_id",
  // as: "courses",
});
coursesModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  // as: "department",
});



// Department Users Relations

usersModel.belongsTo(departmentsModel, {
  //AbuEssa
  // foreignKey: "department_id",
  // as: "department",
});
departmentsModel.hasMany(usersModel, {
  //AbuEssa
  foreignKey: "departmentId",
  as: "users",
});

departmentsModel.belongsTo(usersModel,{
  foreignKey:'user_id',
  as:'department_head'})


// Institution departments Relations
institutionModel.hasMany(departmentsModel, {
  foreignKey: 'institution_id'
});

departmentsModel.belongsTo(institutionModel, {
  foreignKey: 'institution_id'
});

// Sections content Relations
sectionsModel.hasOne(contentModel, {
  foreignKey: 'section_id'
});
contentModel.belongsTo(sectionsModel, {
  foreignKey: 'section_id'
});

// Sections assignment Relations

sectionsModel.hasMany(assignmentModel, {
  foreignKey: "section_id",
  as: "Assignments",
});
assignmentModel.belongsTo(sectionsModel, {
  //AbuEssa
  foreignKey: "section_id",
  as: "Sections",
});

// sections ContentFile Relations
contentFileModel.belongsTo(sectionsModel,{
  foreignKey:'content_id'
})   //zay



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
  institutionModel,
  sectionsModel,
  sectionِAnnouncementModel,
  contentModel,
  contentFileModel,
  prerequisiteModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
  studentSectionModel
};
