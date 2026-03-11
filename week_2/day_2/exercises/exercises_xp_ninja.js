// ===== Exercise 1
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];
let sum = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sum += data[i].age * 7;
  }
}

console.log(sum);
const dogYears = data.reduce((acc, animal) => {
  if (animal.type === 'dog') {
    return acc + animal.age * 7;
  }
  return acc;
}, 0);

console.log(dogYears);

// ===== Exercise 2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

const cleanEmail = userEmail3.trim();

console.log(cleanEmail);
// output:"cannotfillemailformcorrectly@gmail.com"
// ===== Exercise 3
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
const usersObject = {};

users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
});

console.log(usersObject);
// output: { 'Bradley Bouley': 'Full Stack Resident', 
// 'Chloe Alnaji': 'Full Stack Resident', 
// 'Jonathan Baughn': 'Enterprise Instructor', 'Michael Herman': 'Lead Instructor', 
// 'Robert Hajek': 'Full Stack Resident', 
// 'Wes Reid': 'Instructor', 'Zach Klabunde': 'Instructor' }
// ===== Exercise 4
//1
const letters = ['x', 'y', 'z', 'z'];
const result = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];

  if (result[letter]) {
    result[letter]++;
  } else {
    result[letter] = 1;
  }
}

console.log(result);
//2
const result2 = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(result);
