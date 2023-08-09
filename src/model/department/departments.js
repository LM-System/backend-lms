const departments = (Sequelize,DataTypes)=> 
Sequelize.define('departments',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    institution_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})
module.exports = departments