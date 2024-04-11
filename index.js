import WeatherService from './weatherService.js';
import UI from './ui.js';

const apiKey = 'ea748f02ae7e855c5c933625fb1aa856'; 
const weatherService = new WeatherService(apiKey);
const ui = new UI();

// Fetch current weather data and display it on UI
async function displayWeather(location) {
  try {
    const weather = await weatherService.getCurrentWeather(location);
    ui.showCurrentWeather(weather);
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Call displayWeather function with user's current location
displayWeather('London'); // You can change the location here
