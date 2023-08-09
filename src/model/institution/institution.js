const institution = (Sequelize, DataTypes) =>
  Sequelize.define("institution", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
module.exports = institution;
