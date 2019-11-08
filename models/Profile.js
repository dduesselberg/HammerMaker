const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  lists: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lists'
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
