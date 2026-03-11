// ===== Exercise 1
//Create two objects, each object should hold a person’s details.
let person1 = {
  fullName: "John Smith",
  mass: 80,      // kg
  height: 1.8,   // meters
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};
///Your function must calculate and console.log the average.
function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the higher BMI");
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the higher BMI");
  } else {
    console.log("Both have the same BMI");
  }
}
compareBMI(person1, person2);

//
let person2 = {
  fullName: "Jane Doe",
  mass: 70,
  height: 1.65,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

// ===== Exercise 2
//Part 1 & 2: Function to calculate the average
function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  let average = sum / gradesList.length;
  console.log("Average:", average);

  checkPass(average);
}

//Part 3 & 4: Function to check pass or fail (BONUS)
function checkPass(avg) {
  if (avg >= 65) {
    console.log("You passed ");
  } else {
    console.log("You failed and must repeat the course ");
  }
}

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...