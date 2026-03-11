// ===== Exercise 1
1-people.shift();
2-people[people.indexOf("James")] = "Jason";
3-people.push("Alex");
4-console.log(people.indexOf("Mary"));
//5-
const peopleCopy = people.slice(1, 3);
console.log(peopleCopy);
6-console.log(people.indexOf("Foo"));
////Why does it return -1?
////Because "Foo" does not exist in the array.
/////indexOf returns -1 when the element is not found.
//7-
const last = people[people.length - 1];
console.log(last);
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
//Part II - Loops
//1-
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

///2-Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
///Hint: take a look at the break statement in the lesson.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// ===== Exercise 2
const colors = ["blue", "red", "green", "purple", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
/////Bonus
const colors = ["blue", "red", "green", "purple", "black"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// ===== Exercise 3
let number = prompt("Enter a number:");
number = Number(number);

console.log(typeof number);

while (number < 10) {
  number = Number(prompt("Enter a new number:"));
}

// ===== Exercise 4
///Console.log the number of floors in the building.
console.log(building.numberOfFloors);
///Console.log how many apartments are on the floors 1 and 3.
console.log(
  building.numberOfAptByFloor.firstFloor +
  building.numberOfAptByFloor.thirdFloor
);
////Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(
  building.nameOfTenants[1],
  building.numberOfRoomsAndRent.dan[0]
);

///Console.log the name of the second tenant and the number of rooms he has in his apartment.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}


////Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// ===== Exercise 5
///Create an object called family with a few key value pairs.
const family = {
  father: "John",
  mother: "Anna",
  sister: "Emily",
};

////Using a for in loop, console.log the keys of the object.
for (let key in family) {
  console.log(key);
}

////Using a for in loop, console.log the values of the object.
for (let key in family) {
  console.log(family[key]);
}
// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());

///Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
// ===== Exercise 7
///A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
////Hint: a string is an array of letters
////Console.log the name of their secret society. The output should be “ABJKPS”
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = names
  .map(name => name[0])
  .sort()
  .join("");

console.log(secretName);

