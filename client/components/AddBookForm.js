"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = { title, author, genre, description };

    try {
      const response = await fetch('https://book-app-api-iuv4.onrender.com/api/books/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        const newBook = await response.json();
        toast.success(`Book "${newBook.title}" added successfully!`);
        setTitle('');
        setAuthor('');
        setGenre('');
        setDescription('');
        router.push('/');
      } else {
        toast.error("Failed to add the book. Please try again.");
      }
    } catch (error) {
      console.log("addBook error: " , error);
      
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://thumbs.dreamstime.com/b/old-library-interior-books-ancient-building-architecture-prague-literature-study-culture-bookshelf-baroque-knowledge-326243930.jpg')] bg-cover">
      <form onSubmit={handleSubmit} className="mb-4 p-6 border rounded shadow bg-white w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add a New Book</h2>
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2 w-full"
        >
          Add Book
        </button>
      </form>
      <button
        onClick={() => router.push('/')}
        className="mt-4 bg-gray-300 text-black rounded px-4 py-2 w-full max-w-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default AddBookForm;
