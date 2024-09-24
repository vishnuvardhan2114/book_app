"use client";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

type Preferences = {
  genre?: string;
  author?: string;
};

type Book = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
};


export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [randomBooks, setRandomBooks] = useState<Book[]>([]); 
  const [page, setPage] = useState(1);
  const [randomPage, setRandomPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalRandomBooks, setTotalRandomBooks] = useState(0);
  const [limit] = useState(5);
  const router = useRouter();

  const fetchRecommendations = async (preferences: Preferences) => {
    const response = await fetch("https://book-app-api-iuv4.onrender.com/api/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    if (response.ok) {
      const data = await response.json();
      setBooks(data.recommendations);
      setTotalBooks(data.totalBooks);
    } else {
      console.log("No recommendations found");
    }
  };

  const handleBookUpdate = (book: Book) => {
    router.push(`/updateBook/${book._id}`);
  };

  const handleBookDelete = async (bookId : string) => {
    const response = await fetch(`https://book-app-api-iuv4.onrender.com/api/books/${bookId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setBooks(books.filter((book) => book._id !== bookId));
      toast.success('Book deleted successfully!');
    } else {
      toast.error('Failed to delete book');
    }
  };

  const fetchRandomBooks = async () => {
    const response = await fetch(
      `https://book-app-api-iuv4.onrender.com/api/books/random?page=${randomPage}&limit=${limit}`
    );
    if (response.ok) {
      const data = await response.json();
      setRandomBooks(data.randomBooks);
      setTotalRandomBooks(data.totalBooks);
    } else {
      toast.error("Failed to fetch random books");
    }
  };

  const handleNextPage = () => {
    if (page < Math.ceil(totalBooks / limit)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleRandomNextPage = () => {
    if (randomPage < Math.ceil(totalRandomBooks / limit)) {
      setRandomPage((prevPage) => prevPage + 1);
    }
  };

  const handleRandomPreviousPage = () => {
    if (randomPage > 1) {
      setRandomPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddBookPage = () => {
    router.push("/addBook");
  };

  useEffect(() => {
    fetchRecommendations({ genre: "fiction" });
  }, [page]);

  useEffect(() => {
    fetchRandomBooks();
  }, [randomPage]);

  return (
    <div className="mx-auto p-4 min-h-screen bg-[url('https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/4:3/w_1440,h_1080,c_limit/Books-1.jpg')] w-full">
      <h1 className="text-3xl font-bold text-center text-white">
        Personalized Book Recommendation App
      </h1>
      <div className="mt-7">
        <BookForm onFetchRecommendations={fetchRecommendations} />
      </div>
      <button
        className="btn bg-red-100 text-black font-bold p-3 rounded-lg"
        onClick={handleAddBookPage}
      >
        Add your book
      </button>
      {books.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-center mt-6 text-white">
            Book Recommendations
          </h2>
          <BookList books={books} onBookUpdate={handleBookUpdate} onBookDelete={handleBookDelete} />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page >= Math.ceil(totalBooks / limit)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {randomBooks.length > 0 && (
        <>
          <h2 className="text-4xl font-bold text-center mt-6 mb-6 text-white">
            Random Books
          </h2>
          <BookList books={randomBooks} onBookUpdate={handleBookUpdate} onBookDelete={handleBookDelete} />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handleRandomPreviousPage}
              disabled={randomPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleRandomNextPage}
              disabled={randomPage >= Math.ceil(totalRandomBooks / limit)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {randomBooks.length === 0 && (
        <p className="text-center text-white">No random books available</p>
      )}
      <ToastContainer />
    </div>
  );
}
