require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;
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
const prerequestModel = require('./courses/prerequest')(sequelize, DataTypes)
const attendanceModel = require('./attendance/attendance')(sequelize, DataTypes)
const assignmentModel = require('./assignment/assignment')(sequelize, DataTypes)
const announcementModel = require('./announcement/announcement')(sequelize, DataTypes)

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
    prerequestModel,
    attendanceModel,
    assignmentModel,
    announcementModel
}
