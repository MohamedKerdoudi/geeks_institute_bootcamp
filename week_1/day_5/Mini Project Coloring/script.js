const grid = document.getElementById("grid");
const colors = document.querySelectorAll(".color");
const clearBtn = document.getElementById("clear");

let currentColor = "black";
let drawing = false;

for (let i = 0; i < 2500; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    if (drawing) square.style.background = currentColor;
  });

  square.addEventListener("mousedown", () => {
    square.style.background = currentColor;
  });

  grid.appendChild(square);
}
colors.forEach(color => {
  color.addEventListener("click", () => {
    currentColor = color.style.background;
  });
});
document.addEventListener("mousedown", () => drawing = true);
document.addEventListener("mouseup", () => drawing = false);

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square")
    .forEach(sq => sq.style.background = "white");
});
