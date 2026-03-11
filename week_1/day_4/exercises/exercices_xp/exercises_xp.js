// ===== Exercise 1

/* ---------- #1 ----------
   funcOne() uses a *local* variable `a` declared with `let`.
   - Inside the function the value is changed from 5 → 3.
   - The alert therefore shows 3.
   - The variable `a` exists **only** inside funcOne; it does NOT
     affect any `a` that might exist outside the function.
*/
function funcOne() {
    let a = 5;                 // block‑scoped, only inside funcOne
    if (a > 1) {
        a = 3;                 // re‑assign the same local variable
    }
    alert(`inside the funcOne function ${a}`); // → 3
}

// #1.1 – run in the console
// funcOne();   // pops up “inside the funcOne function 3”

/* #1.2 – What if we used `const` instead of `let` ?
   `const` creates a block‑scoped *constant*; it cannot be re‑assigned.
   The line `a = 3;` would throw a **TypeError**:
   "Assignment to constant variable."
   The function would never reach the alert because the error stops execution.
*/


/* ---------- #2 ----------
   `a` is declared in the *global* scope with `let`.
   funcTwo() changes that global variable to 5.
   funcThree() just reads the current value of the global `a`.
*/
let a = 0;                     // global (script‑level) variable

function funcTwo() {
    a = 5;                     // modifies the global `a`
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 – run in the console
// funcThree(); // → "inside the funcThree function 0"
// funcTwo();   // (no output, just changes a)
// funcThree(); // → "inside the funcThree function 5"

/* #2.2 – What if `a` were declared with `const` ?
   `const` cannot be reassigned, therefore the line `a = 5;` inside
   `funcTwo` would throw a **TypeError** ("Assignment to constant variable").
   The first call to `funcThree` would still work (showing the initial value),
   but `funcTwo` would break the script.
*/


/* ---------- #3 ----------
   `funcFour` creates a **property on the global `window` object**.
   In browsers the global object is `window`, so `window.a = "hello"` creates
   a global variable `a` that can be accessed anywhere (even without `var/let/const`).

   `funcFive` reads that global `a`.
*/
function funcFour() {
    window.a = "hello";        // creates/overwrites window.a
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 – run in the console
// funcFour(); // creates window.a = "hello"
// funcFive(); // → "inside the funcFive function hello"


/* ---------- #4 ----------
   A new *local* `a` is declared inside `funcSix` with `let`.
   It shadows the outer `a` (which is `1`). Inside the function the
   local variable is `"test"`, so the alert prints `"test"`.
*/
let a = 1;                     // outer (global) variable

function funcSix() {
    let a = "test";            // block‑scoped, hides the outer `a`
    alert(`inside the funcSix function ${a}`);
}

// #4.1 – run in the console
// funcSix(); // → "inside the funcSix function test"

/* #4.2 – What if we used `const` instead of `let` ?
   The behaviour would be the same **as long as we do not try to re‑assign**
   the variable. `const a = "test"` is perfectly fine because we never change it.
   If we attempted `a = "something else"` later, a TypeError would be thrown.
*/


/* ---------- #5 ----------
   `if (true)` creates a block. The `let a = 5` inside the block is
   *different* from the `let a = 2` declared outside.
   - Inside the block the alert prints 5.
   - Outside the block the outer `a` (value 2) is printed.
*/
let a = 2;                     // outer variable

if (true) {
    let a = 5;                // block‑scoped, hides outer `a`
    alert(`in the if block ${a}`); // → 5
}
alert(`outside of the if block ${a}`); // → 2

/* #5.2 – What if we used `const` instead of `let` ?
   The same scoping rules apply. The only difference is that the
   inner `a` could never be reassigned. Since we never reassign it,
   the code works identically and the alerts remain 5 and 2.
*/
// ===== Exercise 2
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 5;
console.log('experiencePoints →', experiencePoints);   
// ===== Exercise 3
const isString = (value) => typeof value === 'string';
console.log(isString('hello'));               
console.log(isString([1, 2, 4, 0]));        
console.log(isString(123));                
console.log(isString({}));                 
// ===== Exercise 4
const sum = (x, y) => x + y;
console.log('sum(4,7) →', sum(4, 7));
// ===== Exercise 5
/* 1-Function declaration */
function kgToGramsDecl(kg) {
    return kg * 1000;
}
console.log('decl 2kg →', kgToGramsDecl(2)); 

/* 2-Function expression */
const kgToGramsExpr = function (kg) {
    return kg * 1000;
};
console.log('expr 3kg →', kgToGramsExpr(3));  
// 3-Arrow function (one‑liner)
const kgToGramsArrow = kg => kg * 1000;
console.log('arrow 1.5kg →', kgToGramsArrow(1.5));
// ===== Exercise 6
(function (children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    const p = document.createElement('p');
    p.textContent = sentence;
    document.body.appendChild(p);
})(3, 'Alice', 'Paris', 'software engineer');
// ===== Exercise 8

/* ---------- Part I ---------- */
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.getElementById('output').appendChild(p);
    }
    addIngredients('apple', 'banana', 'carrot');
}
makeJuice('medium');

/* ---------- Part II ---------- */
function makeJuiceV2(size) {
    const ingredients = [];


    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    
    function displayJuice() {
        const list = ingredients.join(', ');
        const sentence = `The client wants a ${size} juice, containing ${list}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.getElementById('output').appendChild(p);
    }
    addIngredients('strawberry', 'orange', 'pineapple');
    addIngredients('mango', 'kiwi', 'spinach');
    displayJuice();
}
makeJuiceV2('large');


