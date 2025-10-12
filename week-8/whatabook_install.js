// WhatABook Installation Script
use('whatabookDB');
db.dropDatabase();

db.books.drop();
db.customers.drop();
db.wishlists.drop();

db.books.insertMany([
  { bookId: 101, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { bookId: 102, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  { bookId: 103, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction" },
  { bookId: 104, title: "Pride and Prejudice", author: "Jane Austen", genre: "Classics" },
  { bookId: 105, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
]);

db.customers.insertMany([
  { customerId: "c1001", firstName: "Mary", lastName: "Ramos", email: "mary@example.com" },
  { customerId: "c1002", firstName: "David", lastName: "Kim", email: "david@example.com" },
  { customerId: "c1003", firstName: "Aisha", lastName: "Patel", email: "aisha@example.com" }
]);

db.wishlists.insertMany([
  { customerId: "c1001", bookId: 104, dateAdded: new Date() },
  { customerId: "c1001", bookId: 105, dateAdded: new Date() },
  { customerId: "c1002", bookId: 101, dateAdded: new Date() },
  { customerId: "c1003", bookId: 103, dateAdded: new Date() }
]);

db.books.createIndex({ bookId: 1 }, { unique: true });
db.books.createIndex({ author: 1 });
db.books.createIndex({ genre: 1 });
db.customers.createIndex({ customerId: 1 }, { unique: true });
db.wishlists.createIndex({ customerId: 1 });
db.wishlists.createIndex({ bookId: 1 });

print("Books:", db.books.countDocuments({}));
print("Customers:", db.customers.countDocuments({}));
print("Wishlists:", db.wishlists.countDocuments({}));

"Install complete";
