const express = require("express");
const Book = require("../models/Books");
const router = express.Router();

router.post("/", async (req, res) => {
  const { genre, author, page = 1, limit = 5 } = req.body;
  try {
    let query = {};
    if (genre) {
      query.genre = { $regex: new RegExp(genre, "i") };
    }

    if (author) {
      query.author = { $regex: new RegExp(author, "i") };
    }
    const skip = (page - 1) * limit;
    const recommendations = await Book.find(query).skip(skip).limit(limit);
    if (recommendations.length === 0) {
      return res.status(404).json({ message: "No recommendations found" });
    }

    const totalBooks = await Book.countDocuments(query);
    res.status(200).json({ recommendations, totalBooks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
