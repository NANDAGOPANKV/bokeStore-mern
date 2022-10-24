// import schemas
const Book = require("../models/bookSchema");

// get all books
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error.message);
  }

  if (!books) {
    res.status(404).json({ message: "Books Not Found" });
  } else {
    res.status(200).json({ books });
  }
};

// add book
const addBook = async (req, res, next) => {
  const { name, author, description, price, avilable, image } = req.body;

  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      avilable,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Create Book" });
  }
  return res.status(201).json({ book });
};

// pick book by id
const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch (error) {
    console.log(error.message);
  }

  if (!books) {
    res.status(404).json({ message: " No Book Found with this Id" });
  } else {
    res.status(200).json({ books });
  }
};

// update book by id or update book
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, avilable, description, price, image } = req.body;
  let books;
  try {
    books = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      avilable,
      image,
    });
    books = await books.save();
  } catch (error) {
    console.log(error.message);
  }
  if (!books) {
    res.status(404).json({ message: "Unable to update this book by id" });
  } else {
    res.status(200).json({ books });
  }
};

// delete book by id
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error.message);
  }
  if (!books) {
    res.status(404).json({ message: "Unable to Delete Book" });
  } else {
    res.status(200).json({
      message: `SuccesFully Deleted The item Which Holds This ID: ${id}`,
      books,
    });
  }
};

// export modules
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
