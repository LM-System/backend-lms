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
  announcementModel,
} = require("./index");

// Users Relations

usersModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  as: "department",
});

// Courses Relations

coursesModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  as: "department",
});

// Department Relations

departmentsModel.hasMany(coursesModel, {
  //AbuEssa
  foreignKey: "department_id",
  as: "courses",
});

departmentsModel.hasMany(usersModel, {
  //AbuEssa
  foreignKey: "departmentId",
  as: "users",
});

// Institution Relations

// Sections Relations

sectionsModel.hasMany(assignmentModel, {
  foreignKey: "section_id",
  as: "Assignments",
});

// Content Relations

// ContentFile Relations

// Prerequest Relations

// Attendance Relations

// Assignment Relations

assignmentModel.belongsTo(sectionsModel, {
  //AbuEssa
  foreignKey: "section_id",
  as: "Sections",
});

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
  prerequestModel,
  attendanceModel,
  assignmentModel,
  announcementModel,
};
