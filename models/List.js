const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  game: {
    type: String,
    required: true
  },
  edition: {
    type: String,
    required: true
  },
  army: {
    type: String,
    required: true
  },
  pointValue: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = List = mongoose.model('list', ListSchema);
