const announcement = (Sequelize, DataTypes) =>
  Sequelize.define("announcement", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = announcement;
