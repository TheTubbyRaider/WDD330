// WeatherService Module
class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
  }

  async getCurrentWeather(location) {
    const url = `${this.baseUrl}weather?q=${location}&appid=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
  }

  async getForecast(location) {
    const url = `${this.baseUrl}forecast?q=${location}&appid=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
  }

  async searchLocations(query) {
    const url = `${this.baseUrl}find?q=${query}&appid=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
  }
}

// UI Module
class UI {
  constructor() {
    this.searchBar = document.getElementById('search-bar');
    this.searchInput = document.getElementById('search-input');
    this.currentWeatherContainer = document.getElementById('current-weather');
    this.forecastContainer = document.getElementById('forecast');
    this.alertsContainer = document.getElementById('alerts');
    this.mapContainer = document.getElementById('map');
  }

  showCurrentWeather(weatherData) {
    // Display current weather data
    this.currentWeatherContainer.innerHTML = `
      <h2>Current Weather</h2>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Condition: ${weatherData.weather[0].description}</p>
    `;
  }

  async handleSearch(event) {
    event.preventDefault();
    const location = this.searchInput.value.trim();
    const weatherData = await weatherService.getCurrentWeather(location);
    this.showCurrentWeather(weatherData);
  }
}

// Storage Module
class Storage {
  constructor() {
    // Initialize storage
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
}

// Animation Module
class Animation {
  constructor() {
    // Initialize animation elements
  }
}

// Initialize WeatherService, UI, Storage, and Animation modules
const apiKey = 'ea748f02ae7e855c5c933625fb1aa856';
const weatherService = new WeatherService(apiKey);
const ui = new UI();
const storage = new Storage();
const animation = new Animation();

// Event listener for search bar
ui.searchBar.addEventListener('submit', async (event) => {
  event.preventDefault();
  const location = ui.searchInput.value.trim();
  const weatherData = await weatherService.getCurrentWeather(location);
  ui.showCurrentWeather(weatherData);
});

// Load favorite locations
document.addEventListener('DOMContentLoaded', async () => {
  const favoriteLocations = storage.getFavorites();
  for (const location of favoriteLocations) {
    try {
      const weatherData = await weatherService.getCurrentWeather(location);
      ui.showCurrentWeather(weatherData);
    } catch (error) {
      console.error(`Error fetching weather data for ${location}:`, error);
    }
  }
});
