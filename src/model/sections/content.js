const content = (Sequelize, DataTypes) =>
Sequelize.define('content',{
    title: {
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.STRING
    },

})

module.exports = content
