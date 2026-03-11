// ===== Exercise 1
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

printFullName({ first: 'Elie', last: 'Schoppik' });
//output : 'Your full name is Elie Schoppik'

// ===== Exercise 2
function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map(key => obj[key]);
  return [keys, values];
}
keysAndValues({ a: 1, b: 2, c: 3 });
// [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined });
// [["key1", "key2", "key3"], [true, false, undefined]]
// ===== Exercise 3
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
//output: 3