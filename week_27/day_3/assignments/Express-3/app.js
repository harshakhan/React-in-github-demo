const express = require("express");

const app = express();

app.use(express.json());

let books = [
  {
    title: "harry potter",
    author: "JK Rowling",
    year: 2001,
  },
];

app.get("/book", (req, res) => {
  const book = req.body.book;

  const bookDescription = books.filter((elem) => {
    return elem.title === book;
  });
  if (bookDescription.length === 0) {
    res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(bookDescription);
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const year = req.body.year;

  const temp = books.filter((book) => book.title === title);

  if (temp.length !== 0) {
    res.status(400).json({ message: "Book already present" });
  }

  const newBook = { title, author, year };
  books.push(newBook);
  res.status(201).json({
    status: "Success",
    message: title + " has been added to the array",
  });
});

app.delete("/delete", (req, res) => {
  const book = req.body.book;

  const Index = books.findIndex((elem) => {
    return elem.title === book;
  });

  if (Index >= 0) {
    books.splice(Index, 1);
    res.status(200).json({
      status: "Success",
      message: book + " has been removed from the array",
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.put("/edityear", (req, res) => {
  const book = req.body.book;
  const year = req.body.year;

  const Index = books.findIndex((elem) => {
    return elem.title === book;
  });

  if (Index >= 0) {
    const editedBook = books[Index];
    editedBook.year = req.body.year;
    res.status(200).json({
      status: "Success",
      message: "Changed year of " + book + " to " + year,
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
app.listen(5000, () => {
  console.log("The server is up and running on port 5000");
});