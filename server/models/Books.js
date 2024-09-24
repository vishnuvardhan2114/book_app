const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  author: { type: String, required: true, index: true },
  genre: { type: String, required: true, index: true },
  description: { type: String },
});


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
