// Require API client
const openweathermap = require("openweathermap-api-node");

// API key
const apiKey = "9e04f103227aedbab7295408087f118b";

// Initialize client
const owm = new openweathermap({ apiKey });

export default class WeatherService {
  async getCurrentWeather(location) {
    try {
      // Show loading indicator
      showLoading();

      const weather = await owm.currentWeather({ location });

      // Hide loading indicator
      hideLoading();

      return weather;
    } catch (error) {
      // Hide loading indicator
      hideLoading();

      // Handle error
      handleError(error);
    }
  }

  async getForecast(location) {
    // Same error handling
    try {
      // Show loading indicator
      showLoading();

      const forecast = await owm.forecast({ location });

      // Hide loading indicator
      hideLoading();

      return forecast;
    } catch (error) {
      // Hide loading indicator
      hideLoading();

      // Handle error
      handleError(error);
    }
  }

  async searchLocations(query) {
    // Same error handling
    try {
      // Show loading indicator
      showLoading();

      const locations = await owm.locations({ query });

      // Hide loading indicator
      hideLoading();

      return locations;
    } catch (error) {
      // Hide loading indicator
      hideLoading();

      // Handle error
      handleError(error);
    }
  }
}

// Implement map view
function showMap(weatherData) {
  const map = createMap();

  // Add markers for weather data
  addMapMarkers(map, weatherData);

  // Setup map interactivity
  enableMapInteractivity(map);

  // Make map accessible
  addMapAriaLabels(map);
}

// Share weather data
function share(weatherData) {
  // Open share dialog
  openShareDialog();

  // Add metadata for accessibility
  addShareMetadata(weatherData);

  // Allow sharing via apps
  enableSharing(weatherData);
}

// Accessibility helpers
function addImageDescriptions(images) {
  // Loop through images
  images.forEach((image) => {
    // Add aria-label with description
    image.ariaLabel = createImageDescription(image);
  });
}

function checkContrast(element) {
  // Get foreground and background colors
  const foreground = getForegroundColor(element);
  const background = getBackgroundColor(element);

  // Check contrast ratio
  const contrastRatio = getContrastRatio(foreground, background);

  // If fails, show warning
  if (contrastRatio < 4.5) {
    showContrastWarning(element);
  }
}

function makeFocusVisible(element) {
  // Outline element on focus
  element.addEventListener("focus", (event) => {
    event.target.classList.add("focused");
  });
}
