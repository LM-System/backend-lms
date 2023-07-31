const content = (Sequelize, DataTypes) =>
Sequelize.define('content',{
    title: {
      type: DataTypes.STRING
    },
    section_id: {
      type: DataTypes.INTEGER
    }
})

module.exports = content