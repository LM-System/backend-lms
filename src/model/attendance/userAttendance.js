const userAttendance = (Sequelize, DataTypes) =>
Sequelize.define('attendance', {
    attendance_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.ENUM('Present', 'Absent', 'Late', 'Excused')
    }
})

module.exports = userAttendance