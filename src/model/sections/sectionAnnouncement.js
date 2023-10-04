const sectionAnnouncement = (Sequelize, DataTypes) =>
  Sequelize.define("sectionAnnouncement", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  });

module.exports = sectionAnnouncement;
