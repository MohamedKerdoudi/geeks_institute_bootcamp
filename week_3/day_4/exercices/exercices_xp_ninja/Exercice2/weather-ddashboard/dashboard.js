import { createInterface } from "readline";
import getWeather from "./weather";

function startDashboard() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a city name: ", (city) => {
    getWeather(city);
    rl.close();
  });
}

export default startDashboard;