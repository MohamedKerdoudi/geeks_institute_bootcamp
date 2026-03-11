// ===== Exercise 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
// output: [2, 4, 6]
// ===== Exercise 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// output: [1, 2, 0, 1, 2, 3]
// ===== Exercise 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
[2, 4, 8, 10, 16, 18]
// ===== Exercise 4
//1
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
array.flat(2);
//2
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"]
];
const joined = greeting.map(words => words.join(" "));
//3
const sentence = joined.join(" ");
// output: 'Hello young grasshopper! you are learning fast!'
//4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(Infinity);
// output: [3]  
// ===== Exercise ...