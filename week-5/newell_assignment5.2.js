// Chris Newell - Assignment 5.2 - Projections (Hands-On 5.1)
// Course: WEB 335 - Node.js
// Instructor: Richard Krasso
// Run these in mongosh while connected to web335DB.

use('web335DB');

// a) Add a new user (same fields as existing docs) + proof
db.users.insertOne({
  employeeId: 1011,
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'alovelace@me.com'
});
db.users.find({ employeeId: 1011 });

// b) Update Mozart’s email to mozart@me.com + proof
db.users.updateOne(
  { firstName: 'Wolfgang', lastName: 'Mozart' },
  { $set: { email: 'mozart@me.com' } }
);
db.users.find({ firstName: 'Wolfgang', lastName: 'Mozart' });

// c) Projection: only firstName, lastName, email (hide _id)
db.users.find({}, { _id: 0, firstName: 1, lastName: 1, email: 1 });
