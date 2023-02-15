const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {

});


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  let filtered_book;
  let filtered_books = [];
  for(let i=1; i<=10; i++){
    if(books[`${i}`].author === author){
      filtered_book = books[`${i}`];
      filtered_books.push(filtered_book);
    }
  }
  res.send(JSON.stringify(filtered_books));
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  let filtered_book;
  let filtered_books = [];
  for(let i=1; i<=10; i++){
    if(books[`${i}`].title === title){
      filtered_book = books[`${i}`];
      filtered_books.push(filtered_book);
    }
  }
  res.send(JSON.stringify(filtered_books));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);
});

module.exports.general = public_users;
