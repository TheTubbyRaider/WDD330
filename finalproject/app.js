import weatherService from "./weatherService.js";
import ui from "./ui.js";
import { Storage } from "./storage.js";

async function main() {
  ui.showLoading();

  try {
    const weatherData = await weatherService.getWeatherData("London");
    ui.showWeather(weatherData);
  } catch (error) {
    ui.showError(error);
  }

  Storage.addFavorite("London");
}

main();
