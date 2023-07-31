const {
  usersModel,
  coursesModel,
  departmentsModel,
  studentsCoursesModel,
  instructorsCoursesModel} = require('./index')


// students courses relation
usersModel.belongsToMany(coursesModel,{through:studentsCoursesModel})

//students institutions relations
usersModel.belongsTo(usersModel,{
  foreignKey:'institutionId',
  as:'institution'
})

//students departments relations
usersModel.belongsTo(departmentsModel)

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

module.exports = {
  usersModel,
  coursesModel,
  departmentsModel,
  studentsCoursesModel,
  instructorsCoursesModel
}