const assignment_submittion = (Sequelize, DataTypes) =>
  Sequelize.define("assignment_submittion", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Submitted", "Not Submitted"),
      defaultValue: "Not Submitted",
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attachment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = assignment_submittion;
