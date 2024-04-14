const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{
    timestamps: true,
});

module.exports = model('User', userSchema);