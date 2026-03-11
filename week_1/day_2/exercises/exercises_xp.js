// ===== Exercise 1
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  let result = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
      result.push(i);
    }
  }

  console.log("Sum :", sum);
}


displayNumbersDivisible();     
displayNumbersDivisible(3);   
displayNumbersDivisible(45);   

// ===== Exercise 2
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; 
    }
  }

  return total;
}

console.log(myBill());

// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }

  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2,100,0,0]));  
console.log(changeEnough(0.75, [0,0,20,5]));    

// ===== Exercise 4
function hotelCost() {
  let nights;
  do {
    nights = Number(prompt("How many nights?"));
  } while (isNaN(nights) || nights <= 0);

  return nights * 140;
}

function planeRideCost() {
  let destination;
  do {
    destination = prompt("Destination?");
  } while (!destination);

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;
  do {
    days = Number(prompt("How many days?"));
  } while (isNaN(days) || days <= 0);

  let cost = days * 40;
  if (days > 10) cost *= 0.95;

  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  return `Hotel: $${hotel}, Plane: $${plane}, Car: $${car}, Total: $${hotel + plane + car}`;
}

console.log(totalVacationCost());

// ===== Exercise 5

const container = document.getElementById("container");
console.log(container);


document.querySelectorAll(".list")[0].children[1].textContent = "Richard";


document.querySelectorAll(".list")[1].children[1].remove();


document.querySelectorAll(".list").forEach(ul => {
  ul.firstElementChild.textContent = "YourName";
});


document.querySelectorAll(".list").forEach(ul => {
  ul.classList.add("student_list");
});
document.querySelectorAll(".list")[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

document.querySelectorAll("li").forEach(li => {
  if (li.textContent === "Dan") li.style.display = "none";
});

document.querySelectorAll("li").forEach(li => {
  if (li.textContent === "Richard") li.style.border = "1px solid black";
});

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
  alert("Hello John and Pete");
}
// ===== Exercise 6
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const ul = nav.querySelector("ul");

const li = document.createElement("li");
li.textContent = "Logout";
ul.appendChild(li);

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);
// ===== Exercise 7
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = `${book.title} written by ${book.author}`;

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  if (book.alreadyRead) {
    p.style.color = "red";
  }

  div.appendChild(p);
  div.appendChild(img);
  section.appendChild(div);
});
