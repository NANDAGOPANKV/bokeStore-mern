// module imports
var express = require("express");

// contorllers imports
const {
  getAllBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/BooksController");

// router setup
const router = express.Router();

// get books
router.get("/", getAllBooks);
// create book
router.post("/", addBook);
// find the book by id
router.get("/:id", getBookById);
// update book by id
router.put("/:id", updateBook);
// delete book by id
router.delete("/:id", deleteBook);

// export module
module.exports = router;
