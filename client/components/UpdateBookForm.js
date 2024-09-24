"use client";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const UpdateBookForm = ({ bookId }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async () => {
      if (!bookId) return; // Ensure bookId is defined
      const response = await fetch(`https://book-app-api-iuv4.onrender.com/api/books/${bookId}`);
      if (response.ok) {
        const book = await response.json();
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setDescription(book.description);
      } else {
        console.log("Error fetching book")
      }
    };

    fetchBook();
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = { title, author, genre, description };

    try {
      const response = await fetch(`https://book-app-api-iuv4.onrender.com/api/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });

      if (response.ok) {
        router.push('/'); 
      } else {
        console.log('Failed to update book');
      }
    } catch (error) {
      console.log("update book error: " , error);
      
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/042/592/192/non_2x/ai-generated-moody-home-library-with-dark-shelves-a-ladder-photo.jpg')] bg-cover">
      <form onSubmit={handleSubmit} className="mb-4 p-6 border rounded shadow bg-white w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Update Book</h2>
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
          <textarea
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
          Update Book
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

export default UpdateBookForm;
