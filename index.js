import WeatherService from "./services/WeatherService.js";
import UI from "./ui/UI.js";

// Select elements
const locationEl = document.getElementById("location");
const iconEl = document.getElementById("icon");
const tempEl = document.getElementById("temperature");

// Show weather data
function showWeather(weather) {
  locationEl.textContent = weather.name;
  iconEl.setAttribute("src", weather.iconUrl);
  tempEl.textContent = weather.temperature;
}

// Initialize
async function init() {
  // Get weather
  const weather = await WeatherService.getCurrentWeather("London");

  // Show weather
  showWeather(weather);

  // Rest of init
  UI.showLoadingSpinner();
  UI.hideLoadingSpinner();
}

init();
