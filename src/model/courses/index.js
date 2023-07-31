'use strict'
const {
  coursesModel,
  usersModel,
  departmentsModel,
  instructorsCoursesModel,
  studentsCoursesModel } = require('../index')

// students courses relation
coursesModel.belongsToMany(usersModel,{through:studentsCoursesModel,as:'students'})

// instructor courses relation
coursesModel.belongsToMany(usersModel,{
  through:instructorsCoursesModel,
  as:'instructors'
})

// depatrment courses relation
coursesModel.belongsTo(departmentsModel,{
  foreignKey:'departmentId',
  as:'departments'
})

// institutions courses relation 
coursesModel.belongsTo(usersModel,{
  foreignKey:'institutionId',
  as:'institution'
})


module.exports = coursesModel