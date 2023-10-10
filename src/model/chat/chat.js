const chats = (Sequelize, DataTypes) =>
Sequelize.define('chats',{
    
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reciever_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_id:{
        type: DataTypes.TEXT
    },
    reciever_name:{
        type: DataTypes.STRING
    },
    sender_name:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.TEXT
    },
    time:{
        type: DataTypes.STRING
    }
})

module.exports = chats
