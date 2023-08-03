const attendance = (Sequelize, DataTypes) =>
Sequelize.define('attendance', {
    id: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    section_id: {
      type: DataTypes.INTEGER
    }
})

module.exports = attendance