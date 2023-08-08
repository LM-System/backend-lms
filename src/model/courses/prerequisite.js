const prerequisite = (Sequelize, DataTypes) =>

Sequelize.define('prerequisite',{
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prerequisite_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = prerequisite