const chats = (Sequelize, DataTypes) =>
Sequelize.define('chats',{
    
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    messages:{
        type: DataTypes.TEXT
    }
})

module.exports = chats
