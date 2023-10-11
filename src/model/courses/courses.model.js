const courses = (Sequelize,DataTypes)=> 
Sequelize.define('courses',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    syllabus: {
        type: DataTypes.STRING,
    },

})
module.exports = courses