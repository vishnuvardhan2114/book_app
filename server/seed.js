const mongoose = require("mongoose");
const Book = require("./models/Books");

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    description:
      "A novel about the American dream and the disillusionment that comes with it.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "A story set in a totalitarian society ruled by Big Brother.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    description: "A novel about racial injustice in the Deep South.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    description: "A story about teenage angst and alienation.",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    description:
      "A vision of a future society driven by technology and conformity.",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "A fantasy adventure story of Bilbo Baggins.",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    description: "A tale of a future society where books are banned.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "A romantic novel that critiques the British landed gentry.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    description: "A philosophical book about following your dreams.",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    description: "A mystery thriller that explores a murder in the Louvre.",
  },
];

mongoose
  .connect(
    "mongodb+srv://vishnu:vishnu1421@book.xzccs.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(async () => {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Books inserted!");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
