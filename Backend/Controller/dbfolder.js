const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true, // corrected
  },
  Proffession: {
    type: String,
    default: 'Pta nhi',
  },
  Email: {
    type: String,
    unique: true,
    required: true, // corrected
  },
  Password: {
    type: String,
    required: true, // add if password is required
  },
});

const user = mongoose.model("user", userSchema);

module.exports = {
  user,
};
