const chats = (Sequelize, DataTypes) =>
Sequelize.define('chats',{
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    messages:{
        type: DataTypes.TEXT
    }
})

module.exports = chats
