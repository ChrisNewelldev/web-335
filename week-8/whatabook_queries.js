// WhatABook Showcase Queries
use('whatabookDB');

// 1) Display a list of books
db.books.find({}, { _id: 0, bookId: 1, title: 1, author: 1, genre: 1 });

// 2) Display a list of books by genre (example: 'Fantasy')
db.books.find({ genre: 'Fantasy' }, { _id: 0, bookId: 1, title: 1, author: 1 });

// 3) Display a list of books by author (example: 'George Orwell')
db.books.find({ author: 'George Orwell' }, { _id: 0, bookId: 1, title: 1, genre: 1 });

// 4) Display a book by bookId (example: 102)
db.books.findOne({ bookId: 102 }, { _id: 0, title: 1, author: 1, genre: 1 });
