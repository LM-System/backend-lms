const sections = (Sequelize, DataTypes) =>
Sequelize.define('sections',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    // section_number: {
    //     type: DataTypes.INTEGER,
    // },
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    year: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    semester: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    room_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.Enum('Online', 'Offline'),
        defaultValue: 'Offline'
    },
    building: {
        type: DataTypes.STRING
    },
    days: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    departmentHeadId: {
        type: DataTypes.INTEGER,
    },
    institutionId:{
        type: DataTypes.INTEGER
    },
    capacity: {
        type: DataTypes.INTEGER
    },
    sectionAnnouncment_id: {
        type: DataTypes.INTEGER
    }
    
})
module.exports = sections