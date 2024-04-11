// Require API client
import { OpenWeatherMap } from "openweathermap";

const apiKey = "9e04f103227aedbab7295408087f118b";
const owm = new OpenWeatherMap({ apiKey });

export async function getWeatherData(city) {
  try {
    const data = await owm.getCurrentWeather(city);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Implement map view
function showMap(weatherData) {
  try {
    const map = createMap();

    // Add markers for weather data
    addMapMarkers(map, weatherData);

    // Setup map interactivity
    enableMapInteractivity(map);

    // Make map accessible
    addMapAriaLabels(map);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Share weather data
function share(weatherData) {
  try {
    // Open share dialog
    openShareDialog();

    // Add metadata for accessibility
    addShareMetadata(weatherData);

    // Allow sharing via apps
    enableSharing(weatherData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Accessibility helpers
function addImageDescriptions(images) {
  try {
    // Loop through images
    images.forEach((image) => {
      // Add aria-label with description
      image.ariaLabel = createImageDescription(image);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function checkContrast(element) {
  try {
    // Get foreground and background colors
    const foreground = getForegroundColor(element);
    const background = getBackgroundColor(element);

    // Check contrast ratio
    const contrastRatio = getContrastRatio(foreground, background);

    // If fails, show warning
    if (contrastRatio < 4.5) {
      showContrastWarning(element);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function makeFocusVisible(element) {
  try {
    // Outline element on focus
    element.addEventListener("focus", (event) => {
      event.target.classList.add("focused");
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getWeather(location) {
  try {
    const resp = await fetch(
      `/.netlify/functions/weather-api?location=${location}`
    );

    const data = await resp.json();

    // process weather data...
  } catch (error) {
    console.error(error);
    throw error;
  }
}
