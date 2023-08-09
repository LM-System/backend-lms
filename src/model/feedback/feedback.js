const feedback = (Sequelize, DataTypes) =>
  Sequelize.define("feedback", {
    form: {
      type: DataTypes.TEXT,
    },
    section_id: {
      type: DataTypes.INTEGER,
    },
  });
module.exports = feedback;
