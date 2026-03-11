// ===== Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});
const hasViolet = colors.includes("Violet");

if (hasViolet) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// ===== Exercise 2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const suffix = (index + 1 < 4) ? ordinal[index + 1] : ordinal[0];
  console.log(`${index + 1}${suffix} choice is ${color}.`);
});

// ===== Exercise 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
const country = "USA";
console.log([...country]);
// output: ['U', 'S', 'A']
let newArray = [...[,,]];
console.log(newArray);
// output: [undefined, undefined]
// ===== Exercise 4
//1
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
//2
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// Bonus
const residentLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(residentLastNames);
// ===== Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, word) => acc + " " + word);

console.log(sentence);
// output: 'a long time ago in a galaxy far far away'
// ===== Exercise 6
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];
//1
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

//Bonus
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    );
  });
