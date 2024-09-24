const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  preferences: {
    genre: { type: String },
    author: { type: String }
  },
  ratings: [{
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    rating: { type: Number, min: 1, max: 5 }
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
