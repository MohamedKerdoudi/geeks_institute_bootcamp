import { get } from "axios";
import { blue, yellow, green, cyan, red } from "chalk";

const API_KEY = "YOUR_API_KEY"; 

async function getWeather(city) {
  try {
    const response = await get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;

    console.log(blue.bold(`\nWeather for ${data.name}`));
    console.log(yellow(`Temperature: ${data.main.temp}°C`));
    console.log(green(`Condition: ${data.weather[0].description}`));
    console.log(cyan(`Humidity: ${data.main.humidity}%\n`));
  } catch (error) {
    console.error(red("❌ Unable to fetch weather data."));
  }
}

export default getWeather;