const mongoose = require("mongoose");

const CoursesSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    syllabus: {
        type: String,
    },
    sections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
      }
    ],
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
});

module.exports = mongoose.model("Courses", CoursesSchema);
