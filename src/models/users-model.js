const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  birth_date: {
    type: Date,
    
  },
  phone_number: {
    type: String,
  },
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section'
    }
  ],
  role: {
    type: String,
    enum: [
      "admin",
      "institution",
      "instructor",
      "student",
      "departmentHead"
    ],
    default: "student",
  },
  bio: {
    type: String
  },
  address: {
    type: String
  }
});

userSchema.virtual('token').get(function () {
  return jwt.sign({ email: this.email, role: this.role }, process.env.SECRET);
});

module.exports = mongoose.model("Users", userSchema);
