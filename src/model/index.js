require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
let sequelizeOptions = process.env.NODE_ENV === "production" ?
{
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
} :
{}
const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const usersModel = require('../auth/model/users/user.model')(sequelize, DataTypes)
const coursesModel = require('./courses/courses')(sequelize, DataTypes)
const departmentsModel = require('./department/departments')(sequelize, DataTypes)
const studentSectionModel = require('./studentSection/studentSection')(sequelize, DataTypes)

const institutionModel = require('./institution/institution')(sequelize, DataTypes)
const sectionsModel = require('./sections/sections')(sequelize, DataTypes)
const sectionِAnnouncementModel = require('./sections/sectionAnnouncement')(sequelize, DataTypes)
const contentModel = require('./sections/content')(sequelize, DataTypes)
const contentFileModel = require('./sections/contentFile')(sequelize, DataTypes)
const prerequisiteModel = require('./courses/prerequisite')(sequelize, DataTypes)
const coursePrerequisite = require('./courses/coursePrerequisite')(sequelize, DataTypes)
const attendanceModel = require('./attendance/attendance')(sequelize, DataTypes)
const assignmentModel = require('./assignment/assignment')(sequelize, DataTypes)
const announcementModel = require('./announcement/announcement')(sequelize, DataTypes)
const assignmentSubmittionModel=require('./assignment_submittion/assignment_submittion')(sequelize, DataTypes)
const userAttendanceModel = require('./attendance/userAttendance')(sequelize, DataTypes)
const chatsModel = require('./chat/chat')(sequelize, DataTypes)

module.exports = {
    sequelize,
    DataTypes,
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
}