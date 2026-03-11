// ===== Exercise 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber);

for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2
function capitalize(str) {
  let even = "";
  let odd = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str[i].toUpperCase();
      odd += str[i];
    } else {
      even += str[i];
      odd += str[i].toUpperCase();
    }
  }

  return [even, odd];
}

console.log(capitalize("abcdef")); 

// ===== Exercise 3
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

// ===== Exercise 4
function biggestNumberInArray(arrayNumber) {
  let max = 0;

  for (let item of arrayNumber) {
    if (typeof item === "number" && item > max) {
      max = item;
    }
  }

  return max;
}

console.log(biggestNumberInArray([-1,0,3,100,99,2,99]));
console.log(biggestNumberInArray(['a',3,4,2]));         
console.log(biggestNumberInArray([]));                  

// ===== Exercise 5
function uniqueElements(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(uniqueElements([1,2,3,3,3,3,4,5]));
// ===== Exercise 6
function createCalendar(year, month) {
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  days.forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  let date = new Date(year, month - 1, 1);
  let firstDay = (date.getDay() + 6) % 7; 

  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  while (date.getMonth() === month - 1) {
    const td = document.createElement("td");
    td.textContent = date.getDate();
    row.appendChild(td);

    if ((firstDay + date.getDate()) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }

  table.appendChild(row);
  document.body.appendChild(table);
}

createCalendar(2012, 9);
