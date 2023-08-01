const prerequest = (Sequelize, DataTypes) =>

Sequelize.define('prerequest',{
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    prereq_id: {
        type: DataTypes.INTEGER,
    }
})

module.exports = prerequest