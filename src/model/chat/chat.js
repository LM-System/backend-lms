const chats = (Sequelize, DataTypes) =>
Sequelize.define('chats',{
    
    sender_id: {
      type: DataTypes.INTEGER
    },
    reciever_id:{
        type: DataTypes.INTEGER
    },
    room_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING
    },
    time:{
      type: DataTypes.STRING
    }
})

module.exports = chats
