const mongoose = require("mongoose");

const SectionSchema = mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }
    ],
    year: {
      type: Number,    
    },
    semester: {
      type: String,
    },
    name: {
      type: String,
    },
    room_no: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Online', 'Offline'],
      default: 'Offline'
    },
    building: {
      type: String,
    },
    days: {
      type: String,
    },
    capacity: {
      type: Number,
    },
  });

module.exports = mongoose.model("Sections", SectionSchema);
