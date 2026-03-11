// ===== Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// ===== Exercise 2
function displayStudentInfo(objUser){
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
//output : 'Your full name is Elie Schoppik'
// ===== Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
Object.entries(users);
//[ ['user1', 18273], ['user2', 92833], ['user3', 90315] ]
Object.entries(users).map(([user, id]) => [user, id * 2]);
//[ ['user1', 36546], ['user2', 185666], ['user3', 180630] ]
// ===== Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//output: 'object'
// ===== Exercise 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// ===== Exercise 6
//[2] === [2]     // false
//{} === {}       // false
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
//output: 4
//output: 4
//output: 5
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');

farmerCow.sound('Moooo');
//output: "Moooo I'm a cow, named Lily and I'm brown and white"
