export default class UI {
  constructor() {
    // Get the weather container element
    this.weatherContainer = document.getElementById('weatherContainer');
  }

  // Method to display the current weather on the UI
  showCurrentWeather(weatherData) {
    // Clear previous weather data
    this.weatherContainer.innerHTML = '';

    // Create elements to display weather information
    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');
    weatherInfo.innerHTML = `
      <h2>${weatherData.name}</h2>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Weather: ${weatherData.weather[0].main}</p>
    `;

    // Append the weather information to the weather container
    this.weatherContainer.appendChild(weatherInfo);
  }

  // Method to display error messages on the UI
  showErrorMessage(message) {
    // Clear previous error messages
    this.weatherContainer.innerHTML = '';

    // Create an error message element
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    // Append the error message to the weather container
    this.weatherContainer.appendChild(errorMessage);
  }
}
