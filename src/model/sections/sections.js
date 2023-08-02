const sections = (Sequelize, DataTypes) =>

Sequelize.define('sections',{

    course_id: {
        type: DataTypes.INTEGER,
        unique:true,
    },
    year: {
        type: DataTypes.INTEGER,
        unique:true

    },
    semester: {
        type: DataTypes.STRING,
        unique:true
    },
    name: {
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
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    institution_id: {
      type: DataTypes.INTEGER,

    },
    capacity: {
      type: DataTypes.INTEGER,
    },
  });
module.exports = sections;

