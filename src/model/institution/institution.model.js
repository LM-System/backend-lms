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
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
module.exports = institution;
