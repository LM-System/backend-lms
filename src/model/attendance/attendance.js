const attendance = (Sequelize, DataTypes) =>
Sequelize.define('attendance', {
    date: {
      type: DataTypes.DATE
    },
    section_id: {
      type: DataTypes.INTEGER
      
    }
})

module.exports = attendance