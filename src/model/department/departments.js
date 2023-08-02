const departments = (Sequelize,DataTypes) => 
Sequelize.define('departments',{
    name: {
        type: DataTypes.STRING,
    },
    institution_id:{
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    }
})
module.exports = departments