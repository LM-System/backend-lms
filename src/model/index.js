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
const studentsCoursesModel = require('./user-course/studentsCourses')(sequelize, DataTypes)
const instructorsCoursesModel = require('./user-course/instructorsCourses')(sequelize, DataTypes)

module.exports = {
    sequelize,
    DataTypes,
    usersModel,
    coursesModel,
    departmentsModel,
    instructorsCoursesModel,
    studentsCoursesModel
}
