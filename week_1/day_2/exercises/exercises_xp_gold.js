// ===== Exercise 1
function isBlank(str) {
  return str.length === 0;
}

console.log(isBlank(''));     
console.log(isBlank('abc'));  

// ===== Exercise 2
function abbrevName(name) {
  const parts = name.split(" ");
  return `${parts[0]} ${parts[1][0]}.`;
}

console.log(abbrevName("Robin Singh")); 

// ===== Exercise 3
function swapCase(str) {
  let result = "";

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));
// ===== Exercise 4
function isOmnipresent(arr, value) {
  for (let subArray of arr) {
    if (!subArray.includes(value)) {
      return false;
    }
  }
  return true;
}

console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)); 
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); 

// ===== Exercise 5
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
