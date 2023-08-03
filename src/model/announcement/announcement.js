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
    institution_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = announcement;

