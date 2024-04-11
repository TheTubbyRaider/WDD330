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

async function getWeather(location) {
  const resp = await fetch(
    `/.netlify/functions/weather-api?location=${location}`
  );

  const data = await resp.json();

  // process weather data...
}
