const departments = (Sequelize,DataTypes)=> 
Sequelize.define('departments',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
module.exports = departments