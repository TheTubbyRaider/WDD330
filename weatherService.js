import { OpenWeatherMapClient } from "openweathermap-api-node";

// API key and setup
const apiKey = "9b8e8824203134875cd82225113718f2";
const apiClient = new OpenWeatherMapClient({ apiKey });

// Get current weather
async function getCurrentWeather(location) {
  // API call
  const data = await apiClient.getCurrentWeather({ location });

  // Shape data
  return {
    name: data.name,
    temperature: data.main.temp,
    iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
  };
}

// Export
export default {
  getCurrentWeather,
};
