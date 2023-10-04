const sections = (Sequelize, DataTypes) =>

Sequelize.define('sections',{
  name: {
    type: DataTypes.STRING,
},
  section_number: {
        type: DataTypes.INTEGER,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    semester: {
        type: DataTypes.STRING,
    },
    room_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Online', 'Offline'),
        defaultValue: 'Offline'
    },
    building: {
      type: DataTypes.STRING,
    },
    days: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    start_time: {
      type: DataTypes.DATE,
    },
    end_time: {
      type: DataTypes.DATE,
    },
  });
module.exports = sections;