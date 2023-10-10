"use strict";
const {
  usersModel,
  adminsModel,
  instructorsModel,
  studentsModel,
  coursesModel,
  sectionsModel,
  studentSectionModel,
  departmentsModel,
  institutionModel,
  announcementModel,
  sectionِAnnouncementModel,
  attendanceModel,
  assignmentModel,
  studentAssignmentSubmission,
  contentModel,

  chatsModel,
  // prerequisiteModel,
  // feedbackModel
} = require("./index");


// Users Relations admins
usersModel.hasOne(studentsModel);

// Users Relations instructors
usersModel.hasOne(instructorsModel);

// Users Relations students
usersModel.hasOne(adminsModel);

// Users Relations students
usersModel.hasOne(adminsModel);


// section student relations
studentsModel.belongsToMany(sectionsModel,{ through: studentSectionModel });
sectionsModel.belongsToMany(studentsModel,{ through: studentSectionModel });


// section instructor relations
instructorsModel.hasMany(sectionsModel);
sectionsModel.belongsTo(instructorsModel);


//course sections relations
coursesModel.hasMany(sectionsModel);
sectionsModel.belongsTo(coursesModel);


//department course relations
departmentsModel.hasMany(coursesModel);
coursesModel.belongsTo(departmentsModel);


//institution department relations
institutionModel.hasMany(departmentsModel);
departmentsModel.belongsTo(institutionModel);


// adminsModel Relations institution
adminsModel.hasOne(institutionModel);
institutionModel.belongsTo(adminsModel);

// adminsModel Relations institution
instructorsModel.hasOne(departmentsModel);
departmentsModel.belongsTo(instructorsModel,{ as: 'departmentHead' })

departmentsModel.hasMany(instructorsModel);
instructorsModel.belongsTo(departmentsModel)


// institution Relations announcment
institutionModel.hasMany(announcementModel);
announcementModel.belongsTo(institutionModel)

// sectionsModel Relations sectionِAnnouncementModel
sectionsModel.hasMany(sectionِAnnouncementModel);
sectionِAnnouncementModel.belongsTo(sectionsModel)

// sectionsModel Relations attendanceModel
sectionsModel.hasMany(attendanceModel);
attendanceModel.belongsTo(sectionsModel)

// studentsModel Relations attendanceModel
studentsModel.hasMany(attendanceModel);
attendanceModel.belongsTo(studentsModel)

// section student relations
studentsModel.hasOne(studentAssignmentSubmission);
studentAssignmentSubmission.belongsTo(studentsModel);

// section student relations
departmentsModel.hasOne(studentsModel);
studentsModel.belongsTo(departmentsModel);

// sectionsModel Relations assignmentModel
sectionsModel.hasMany(assignmentModel);
assignmentModel.belongsTo(sectionsModel)

// assignmentModel Relations studentAssignmentSubmission
assignmentModel.hasMany(studentAssignmentSubmission);
studentAssignmentSubmission.belongsTo(assignmentModel)

// coursesModel Relations contentModel
coursesModel.hasMany(contentModel);
contentModel.belongsTo(coursesModel)


module.exports = {
  usersModel,
  adminsModel,
  instructorsModel,
  studentsModel,
  coursesModel,
  sectionsModel,
  studentSectionModel,
  departmentsModel,
  institutionModel,
  announcementModel,
  sectionِAnnouncementModel,
  attendanceModel,
  assignmentModel,
  studentAssignmentSubmission,
  contentModel,

  // prerequisiteModel,
  chatsModel,
  // feedbackModel
};
