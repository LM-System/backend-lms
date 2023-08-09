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
    department_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
    },
    end_date: {
        type: DataTypes.DATE,
    },

})
module.exports = courses