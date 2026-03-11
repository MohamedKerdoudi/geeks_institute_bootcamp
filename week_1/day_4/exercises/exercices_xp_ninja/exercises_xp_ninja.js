// ===== Exercise 1
console.log( mergeWords('Hello')() ); 
console.log(
  mergeWords('There')('is')('no')('spoon.')()
);
const sentence = mergeWords('The')
  ('quick')
  ('brown')
  ('fox')
  ('jumps')
  ('over')
  ('the')
  ('lazy')
  ('dog.')();

console.log(sentence); 