const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/books");
const recommendationRoutes = require("./routes/recommendations");
const Book = require("./models/Books");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch random books - place it before dynamic routes
app.get("/api/books/random", async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    const skip = (page - 1) * limit;
    const totalBooks = await Book.countDocuments();
    // Retrieve random books with pagination by sorting randomly
    const randomBooks = await Book.aggregate([
      { $sample: { size: totalBooks } },
      { $skip: skip },
      { $limit: parseInt(limit) },
    ]);
    res.json({
      randomBooks,
      totalBooks,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch random books" });
  }
});

// Book routes
app.use("/api/books", bookRoutes);

// Recommendation routes
app.use("/api/recommendations", recommendationRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// Sample route to test the server
app.get("/", (req, res) => {
  res.send("Welcome to the Book Recommendation API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
