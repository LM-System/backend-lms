const studentAssignmentSubmission = (Sequelize, DataTypes) =>
  Sequelize.define("studentAssignmentSubmission", {
    status: {
      type: DataTypes.ENUM("Submitted", "Not Submitted"),
      defaultValue: "Not Submitted",
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = studentAssignmentSubmission;
