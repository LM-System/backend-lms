const assignment = sequelize.define('assignment', {
  section_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  priority: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = assignment