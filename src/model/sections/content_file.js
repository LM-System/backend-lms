const contentFiles = (Sequelize, DataTypes) =>

Sequelize.define('contentFiles',{
    content_id: {
      type: DataTypes.INTEGER
    },
    file: {
      type: DataTypes.STRING
    }
})

module.exports = contentFiles