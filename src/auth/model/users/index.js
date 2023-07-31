'use strict'
const {
  usersModel,
  coursesModel,
  departmentsModel,
  instructorsCoursesModel,
  studentsCoursesModel } = require('../../../model/index')

// students courses relation
usersModel.belongsToMany(coursesModel,{through:studentsCoursesModel})

//students institutions relations
usersModel.belongsTo(usersModel,{
  foreignKey:'institutionId',
  as:'institution'
})

//students departments relations
usersModel.belongsTo(departmentsModel)

module.exports = usersModel