const institution = (Sequelize,DataTypes)=> 
Sequelize.define('institution',{
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    logo: {
        type: DataTypes.STRING,
    },
    institution_credentials: {
        type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    user_id:{
        type: DataTypes.INTEGER
    }
    
})
module.exports = institution