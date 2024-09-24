// BookList.js
import React from 'react';

const BookList = ({ books, onBookUpdate, onBookDelete }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book._id} className="mb-4 border p-4 rounded shadow bg-slate-200">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p>{book.description}</p>
          <button
            onClick={() => onBookUpdate(book)}
            className="m-2  bg-blue-500 text-white rounded px-2"
          >
            Update
          </button>
          <button
            onClick={() => onBookDelete(book._id)}
            className="m-2 float-right bg-red-500 text-white rounded px-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
