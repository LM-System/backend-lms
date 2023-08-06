const message = (Sequelize, DataTypes) =>
  Sequelize.define("message", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = message;
