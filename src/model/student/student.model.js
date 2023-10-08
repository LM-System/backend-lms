"use strict";

const studentsModel = (sequelize, DataTypes) => {
  const model = sequelize.define("students", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });

  return model;
};

module.exports = studentsModel;
