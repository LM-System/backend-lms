const sectionAnnouncement = (Sequelize, DataTypes) =>
Sequelize.define('sectionAnnouncement',{
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    section_id: {
      type: DataTypes.INTEGER
    }
})

module.exports = sectionAnnouncement