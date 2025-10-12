// Chris Newell - Assignment 6.2 - Aggregate Queries (Hands-On 6.1)

use('web335DB');

// a) Display all students
db.students.find({});

// b) Add a new student, then prove insert
db.students.insertOne({ studentId: 9001, firstName: "Luna", lastName: "Lovegood", houseId: 4 });
db.students.find({ studentId: 9001 });

// c) Update that student, then prove update
db.students.updateOne({ studentId: 9001 }, { $set: { lastName: "Lovegood-Smith" } });
db.students.find({ studentId: 9001 });

// d) Delete that student, then prove delete
db.students.deleteOne({ studentId: 9001 });
db.students.find({ studentId: 9001 });

// e) Display all students by house
db.students.aggregate([
  { $lookup: { from: "houses", localField: "houseId", foreignField: "houseId", as: "house" } },
  { $unwind: "$house" },
  { $group: { _id: "$house.name", students: { $push: { firstName: "$firstName", lastName: "$lastName" } } } },
  { $project: { _id: 0, House: "$_id", Students: "$students" } },
  { $sort: { House: 1 } }
]);

// f) Display all students in house Gryffindor
db.students.aggregate([
  { $lookup: { from: "houses", localField: "houseId", foreignField: "houseId", as: "house" } },
  { $unwind: "$house" },
  { $match: { "house.name": "Gryffindor" } },
  { $group: { _id: "$house.name", students: { $push: { firstName: "$firstName", lastName: "$lastName" } } } },
  { $project: { _id: 0, Gryffindor: "$students" } }
]);

// g) Display all students in the house with an Eagle mascot
db.students.aggregate([
  { $lookup: { from: "houses", localField: "houseId", foreignField: "houseId", as: "house" } },
  { $unwind: "$house" },
  { $match: { "house.mascot": "Eagle" } },
  { $group: { _id: "$house.name", students: { $push: { firstName: "$firstName", lastName: "$lastName" } } } },
  { $project: { _id: 0, House: "$_id", Students: "$students" } }
]);
