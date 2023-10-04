const courses = (Sequelize,DataTypes)=> 
Sequelize.define('courses',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    syllabus: {
        type: DataTypes.STRING,
    },

})
module.exports = courses