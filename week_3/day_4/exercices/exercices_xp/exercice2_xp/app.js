import { people } from './data.js';

function calculateAverageAge(arr) {
  const total = arr.reduce((sum, person) => sum + person.age, 0);
  const average = total / arr.length;
  console.log("Average Age:", average);
}

calculateAverageAge(people);