const prerequisite = (Sequelize, DataTypes) =>

Sequelize.define('prerequisite',{
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    prerequisite_id: {
        type: DataTypes.INTEGER,
    }
})

module.exports = prerequisite