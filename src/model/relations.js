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
} = require("./index");


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
  as: "courses",
});
coursesModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  as: "department",
});



// Department Users Relations

usersModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  as: "department",
});
departmentsModel.hasMany(usersModel, {
  //AbuEssa
  foreignKey: "departmentId",
  as: "users",
});

departmentsModel.belongsTo(usersModel,{
  foreignKey:'user_id',
  as:'department_head'
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

sectionsModel.hasMany(assignmentModel, {
  foreignKey: "section_id",
  as: "Assignments",
});

contentModel.belongsTo(sectionsModel, {
  foreignKey: 'section_id'
});
// Content Relations

// ContentFile Relations
contentFileModel.belongsTo(sectionsModel,{
  foreignKey:'content_id'
})   //zay
// Prerequest Relations

// Attendance Relations

// Assignment Relations

assignmentModel.belongsTo(sectionsModel, {
  //AbuEssa
  foreignKey: "section_id",
  as: "Sections",
});

// Announcement Relations
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
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
};
  studentSectionModel
}
