// Chris Newell - Assignment 4.3 - MongoDB Shell Queries
// Course: WEB 335 - Node.js
// Instructor: Richard Krasso

// These queries are intended to be run in mongosh after connecting to web335DB.

use('web335DB');

// Seed data (idempotent: clears and reinserts for demo)
db.users.deleteMany({});
db.users.insertMany([
  { employeeId: 1007, firstName: 'Richard',  lastName: 'Bach',     email: 'rbach@me.com' },
  { employeeId: 1008, firstName: 'Wolfgang', lastName: 'Mozart',   email: 'wmozart@me.com' },
  { employeeId: 1009, firstName: 'Johann',   lastName: 'Bach',     email: 'jbach@me.com' },
  { employeeId: 1010, firstName: 'Ludwig',   lastName: 'Beethoven',email: 'lbeethoven@me.com' }
]);

// a) Display all users in the collection
db.users.find();

// b) Display the user with the email address jbach@me.com
db.users.find({ email: 'jbach@me.com' });

// c) Display the user with the last name Mozart
db.users.find({ lastName: 'Mozart' });

// d) Display the user with the first name Richard
db.users.find({ firstName: 'Richard' });

// e) Display the user with employeeId 1010
db.users.find({ employeeId: 1010 });
