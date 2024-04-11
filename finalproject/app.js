import { getWeatherData } from "./weatherService.js";
import { showLoading, showWeather, showError } from "./ui.js";
import { Storage } from "./storage.js";

async function main() {
  showLoading();

  try {
    const weatherData = await getWeatherData("London");
    showWeather(weatherData);
  } catch (error) {
    showError(error);
  }

  Storage.addFavorite("London");
}

main();
