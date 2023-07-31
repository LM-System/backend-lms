'use strict'
const {sequelize, DataTypes} = require('../index')
const {usersModel, departmentsModel} = require('../index')


// departments departmentHead relation
departmentsModel.belongsTo(usersModel,{
  foreignKey:'departmentHeadId',
  as:'departmentHead'
})

//departments instituations relations
departmentsModel.belongsTo(usersModel,{
  foreignKey:'institutionId',
  as:'institution'
})


module.exports = departmentsModel