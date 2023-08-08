const coursePrerequisite = (Sequelize,DataTypes)=> 
Sequelize.define('coursePrerequisite',{
    course_id: {
      type: DataTypes.INTEGER
    },
    prerequisite_id: {
      type: DataTypes.INTEGER
    }
})

module.exports = coursePrerequisite