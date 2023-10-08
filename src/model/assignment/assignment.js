const assignment = (Sequelize, DataTypes) =>
  Sequelize.define("assignment", {
    title: {
      type: DataTypes.STRING,
      
    },
    description: {
      type: DataTypes.STRING,
      
    },
    due_date: {
      type: DataTypes.DATE,
      
    },
    attachment: {
      type: DataTypes.STRING,
      
    },
  });

module.exports = assignment;
