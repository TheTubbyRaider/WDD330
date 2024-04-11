// Require API client
import { OpenWeatherMap } from "openweathermap";

const apiKey = "9e04f103227aedbab7295408087f118b";
const owm = new OpenWeatherMap({ apiKey });

export async function getWeatherData(city) {
  try {
    // Log request URL
    console.log(
      `Request URL: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    // Make API request
    const response = await owm.getCurrentWeather(city);

    // Log raw response
    console.log("API Response:", response);

    // Validate response data
    if (!response || !response.main) {
      throw new Error("Invalid response data");
    }

    // Return data
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// Implement map view
function showMap(weatherData) {
  try {
    // Validate weather data
    if (!weatherData) {
      throw new Error("Weather data not provided");
    }

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
    // Validate weather data
    if (!weatherData) {
      throw new Error("Weather data not provided");
    }

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
    // Validate images array
    if (!images || !Array.isArray(images)) {
      throw new Error("Invalid images array");
    }

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
    // Validate element
    if (!element) {
      throw new Error("Element not provided");
    }

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
    // Validate element
    if (!element) {
      throw new Error("Element not provided");
    }

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
    // Validate location
    if (!location) {
      throw new Error("Location not provided");
    }

    const resp = await fetch(
      `/.netlify/functions/weather-api?location=${location}`
    );

    // Validate response
    if (!resp.ok) {
      throw new Error("Invalid response");
    }

    const data = await resp.json();

    // Validate data
    if (!data) {
      throw new Error("Invalid data");
    }

    // process weather data...
  } catch (error) {
    console.error(error);
    throw error;
  }
}
