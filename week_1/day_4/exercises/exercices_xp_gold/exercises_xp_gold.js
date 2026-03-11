// ===== Exercise 1
const landscape = () => {
  let result = "";

  const flat = x => {
    for (let i = 0; i < x; i++) {
      result += "_";
    }
  };

  const mountain = x => {
    result += "/";                     
    for (let i = 0; i < x; i++) {
      result += "'";
    }
    result += "\\";                   
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log( landscape() );  

landscape();            

// ===== Exercise 2
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);  

// ===== Exercise 3
const curriedSum = a => b => a + b;
curriedSum(30)(1);  
// ===== Exercise 4
const curriedSum2 = a => b => a + b;
const add5 = curriedSum(5);
add5(12);             
// ===== Exercise 5
const compose = (f, g) => a => f(g(a));
const add1 = num => num + 1;
const add6 = num => num + 6;

compose(add1, add6)(10);   