/*
  Author: Chris Newell
  Date: October 6, 2025
  File Name: newell_assignment4.3.js
  Description: MongoDB Shell queries for WEB-335 Assignment 4.3
*/

// Display all users in the collection
db.users.find();

// Display the user with the email address jbach@me.com
db.users.find({ email: "jbach@me.com" });

// Display the user with the last name Mozart
db.users.find({ lastName: "Mozart" });

// Display the user with the first name Richard
db.users.find({ firstName: "Richard" });

// Display the user with employeeId 1010
db.users.find({ employeeId: 1010 });
