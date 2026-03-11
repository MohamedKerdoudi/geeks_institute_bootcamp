const _ = require('lodash');
const math = require('./math');

const numbers = [5, 10, 15];

console.log("Sum:", math.add(5, 10));
console.log("Multiply:", math.multiply(5, 10));
console.log("Max number using lodash:", _.max(numbers));