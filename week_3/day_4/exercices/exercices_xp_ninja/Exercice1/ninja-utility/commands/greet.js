import { blue, green } from "chalk";

function greet(name = "Ninja") {
  console.log(
    blue.bold(`👋 Welcome, ${name}!`) +
    "\n" +
    green("Your ninja utility is ready to strike! 🥷")
  );
}

export default greet;