const chats = (Sequelize, DataTypes) =>
Sequelize.define('chats',{
    
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reciever_id:{
        type: DataTypes.INTEGER
    },
    room_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time:{
      type: DataTypes.STRING,
      allowNull: false,
    }
})

module.exports = chats
