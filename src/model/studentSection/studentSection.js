'use strict';
const {usersModel,sectionsModel} = require('../index')

const studentSection = (Sequelize,DataTypes)=> 
Sequelize.define('student_section',{})
module.exports = studentSection