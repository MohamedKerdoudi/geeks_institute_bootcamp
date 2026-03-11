// ====== Daily Challenge 1
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
//1
const usernames = [];

gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});

console.log(usernames);
// output:["john!", "becky!", "susy!", "tyson!"]
//2
const winners = [];

gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

console.log(winners);
// output: ["becky", "susy"]
//3
let totalScore = 0;

gameInfo.forEach(player => {
  totalScore += player.score;
});

console.log(totalScore);
// output: 71
// ====== Daily Challenge 2
//1
function getCarHonda(carInventory) {
  const honda = carInventory.find(car => car.car_make === "Honda");

  return `This is a ${honda.car_make} ${honda.car_model} from ${honda.car_year}.`;
}
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

console.log(getCarHonda(inventory));
// output: "This is a Honda Accord from 1983."
//Part 2
function sortCarInventoryByYear(carInventory) {
  return [...carInventory].sort(
    (a, b) => a.car_year - b.car_year
  );
}
const sortedInventory = sortCarInventoryByYear(inventory);
console.log(sortedInventory);
// ====== Daily Challenge 3
