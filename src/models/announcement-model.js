const mongoose = require("mongoose");

const AnnouncementSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
      }
    ],
    institution: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ''
    }
});

module.exports = mongoose.model("Announcements", AnnouncementSchema);