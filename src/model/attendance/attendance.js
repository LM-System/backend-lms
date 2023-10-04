const attendance = (Sequelize, DataTypes) =>
  Sequelize.define("attendance", {
    date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM("present", "absent", "later"),
      defaultValue: "absent",
    },
  });

module.exports = attendance;
