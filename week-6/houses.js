use('web335DB');

// Reset (safe for screenshots)
db.houses.drop();
db.students.drop();

// Houses (includes Ravenclaw with Eagle mascot)
db.houses.insertMany([
  { houseId: 1, name: 'Gryffindor', mascot: 'Lion' },
  { houseId: 2, name: 'Hufflepuff', mascot: 'Badger' },
  { houseId: 3, name: 'Slytherin',  mascot: 'Serpent' },
  { houseId: 4, name: 'Ravenclaw',  mascot: 'Eagle' }
]);

// Students mapped to houseId
db.students.insertMany([
  { studentId: 1001, firstName: 'Harry',    lastName: 'Potter',   houseId: 1 },
  { studentId: 1002, firstName: 'Hermione', lastName: 'Granger',  houseId: 1 },
  { studentId: 1003, firstName: 'Ron',      lastName: 'Weasley',  houseId: 1 },
  { studentId: 1004, firstName: 'Luna',     lastName: 'Lovegood', houseId: 4 },
  { studentId: 1005, firstName: 'Cho',      lastName: 'Chang',    houseId: 4 },
  { studentId: 1006, firstName: 'Draco',    lastName: 'Malfoy',   houseId: 3 }
]);
