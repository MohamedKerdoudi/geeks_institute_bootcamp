const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 }
];

let nextId = 3;


app.get("/api/books", (req, res) => {
  res.json(books);
});


app.get("/api/books/:bookId", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});


app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newBook = {
    id: nextId++,
    title,
    author,
    publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`📚 Book API running on http://localhost:${PORT}`);
});