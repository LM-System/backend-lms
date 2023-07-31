const attendance = (Sequelize, DataTypes) =>
Sequelize.define('attendance',{
    course_id: {
      type: DataTypes.INTEGER
    },
    section_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('Present', 'Absent', 'Late', 'Excused')
    }
})

module.exports = attendance