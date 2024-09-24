import React, { useState } from 'react';

const BookForm = ({ onFetchRecommendations }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const preferences = {};
    if (genre) preferences.genre = genre;
    if (author) preferences.author = author;

    onFetchRecommendations(preferences);
  };

  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow w-full max-w-md bg-slate-700">
        <h2 className="text-2xl font-bold mb-2 text-center text-white">Get Book Recommendations</h2>

        <div>
          <label className="block mb-2 font-semibold text-xl text-white">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter genre"
          />
        </div>
        <div className="mt-4 ">
          <label className="block mb-2 font-semibold text-xl text-white">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter author"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2 w-full"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default BookForm;
