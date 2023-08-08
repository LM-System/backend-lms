"use strict";
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
  coursePrerequisite,
  attendanceModel,
  assignmentModel,
  announcementModel,
  assignmentSubmittionModel,
  userAttendanceModel,
  chatsModel
} = require("./index");

// Users attendance Relations

usersModel.belongsToMany(attendanceModel, {
  foreignKey: 'attendance_id',
  through: userAttendanceModel
}) 
attendanceModel.belongsToMany(usersModel, {
  foreignKey: 'user_id',
  through: userAttendanceModel
}) 

// Courses prerequisite Relations
coursesModel.belongsToMany(prerequisiteModel, {
  foreignKey: 'course_id',
  through: coursePrerequisite
})
prerequisiteModel.belongsToMany(coursesModel, {
  foreignKey: 'prerequisite_id',
  through: coursePrerequisite
})

// // Institution users Relations
institutionModel.hasMany(usersModel, {
  foreignKey: "institution_id",
});
usersModel.belongsTo(institutionModel, {
  foreignKey: "institution_id",
});

institutionModel.hasOne(usersModel,{
  foreignKey: 'user_id'

})

institutionModel.belongsTo(usersModel, {
  foreignKey: "user_id",
});
// usersModel.belongsTo(institutionModel)

// // Attendance sections Relations
attendanceModel.belongsToMany(sectionsModel,{
  foreignKey: 'attendance_id',
  through: 'section_attendance'
})

sectionsModel.belongsToMany(attendanceModel, {
  foreignKey: 'section_id',
  through: 'section_attendance'
})

usersModel.hasMany(studentSectionModel, {
});

studentSectionModel.belongsTo(usersModel, {
});


sectionsModel.hasMany(studentSectionModel, {
});

studentSectionModel.belongsTo(sectionsModel, {
});

// // Courses department Relations

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

// // Department Users Relations

usersModel.belongsTo(departmentsModel, {
  //AbuEssa
  foreignKey: "department_id",
  // as: "department",
});
departmentsModel.hasMany(usersModel, {
  //AbuEssa
  foreignKey: "departmentId",
  as: "users",
});

departmentsModel.belongsTo(usersModel, {
  foreignKey: "user_id",
  as: "department_head",
});

// // Institution departments Relations
institutionModel.hasMany(departmentsModel, {
  foreignKey: "institution_id",
});

departmentsModel.belongsTo(institutionModel, {
  foreignKey: "institution_id",
});

// // Sections content Relations
sectionsModel.hasOne(contentModel, {
  foreignKey: "section_id",
});
contentModel.belongsTo(sectionsModel, {
  foreignKey: "section_id",
});

// // Sections assignment Relations

sectionsModel.hasMany(assignmentModel, {
  foreignKey: "section_id",
  // as: "Assignments",
});
assignmentModel.belongsTo(sectionsModel, {
  //AbuEssa
  foreignKey: "section_id",
  // as: "Sections",
});

// // Assignment Submittion assignment Relations

assignmentModel.hasMany(assignmentSubmittionModel, {
  //AbuEssa
  foreignKey: "assignment_id",
  // as:"assignmentSubmit"
});

assignmentSubmittionModel.belongsTo(assignmentModel, {
  //AbuEssa
  foreignKey: "assignment_id",
  // as: "Assignments",
});

// // User Assignment Submittion Relations

usersModel.hasMany(assignmentSubmittionModel, {
  //AbuEssa
  foreignKey: "student_id",
});

assignmentSubmittionModel.belongsTo(usersModel, {
  //AbuEssa
  foreignKey: "student_id",
});

// sections ContentFile Relations
contentFileModel.belongsTo(sectionsModel, {
  foreignKey: "content_id",
}); //zay

// Announcement Relations
announcementModel.belongsTo(institutionModel, {
  foreignKey: "institution_id",
}); //zay
//sectionAnnouncment Relation
sectionِAnnouncementModel.belongsTo(sectionsModel, {
  foreignKey: "section_id",
}); //zay

usersModel.hasMany(chatsModel,{
  foreignKey:'sender_id',
  sourceKey:'id'

})
chatsModel.belongsTo(usersModel,{
  foreignKey:'sender_id',
  sourceKey:'id'
})


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
  studentSectionModel,
  assignmentSubmittionModel,
  userAttendanceModel,
  chatsModel
};
