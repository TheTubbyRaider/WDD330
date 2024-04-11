import weatherService from "./finalproject/weatherService.js";
import ui from "./finalproject/ui.js";
import { Storage } from "./finalproject/storage.js";

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
