import { faker } from '@faker-js/faker';

const users = [];

function addUser() {
  const user = {
    name: faker.person.fullName(),
    address: {
      street: faker.location.streetAddress(),
      country: faker.location.country()
    }
  };

  users.push(user);
}

function generateUsers(number) {
  for (let i = 0; i < number; i++) {
    addUser();
  }

  console.log(users);
}

export default generateUsers;

const generateUsers = require('./users');

generateUsers(3);