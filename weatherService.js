// Require API client
import { OpenWeatherMap } from "openweathermap";

const apiKey = "9b8e8824203134875cd82225113718f2";
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

// Implement map view based on wireframes
function showMap(weatherData) {
  try {
    // Validate weather data
    if (!weatherData) {
      throw new Error("Weather data not provided");
    }

    const map = createMap();

    // Add markers for weather data based on wireframes
    addMapMarkers(map, weatherData);

    // Setup map interactivity based on wireframes
    enableMapInteractivity(map);

    // Make map accessible based on wireframes
    addMapAriaLabels(map);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Share weather data based on wireframes
function share(weatherData) {
  try {
    // Validate weather data
    if (!weatherData) {
      throw new Error("Weather data not provided");
    }

    // Open share dialog based on wireframes
    openShareDialog();

    // Add metadata for accessibility based on wireframes
    addShareMetadata(weatherData);

    // Allow sharing via apps based on wireframes
    enableSharing(weatherData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Accessibility helpers based on wireframes
function addImageDescriptions(images) {
  try {
    // Validate images array
    if (!images || !Array.isArray(images)) {
      throw new Error("Invalid images array");
    }

    // Loop through images
    images.forEach((image) => {
      // Add aria-label with description based on wireframes
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

    // If fails, show warning based on wireframes
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

    // Outline element on focus based on wireframes
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

    // Validate response based on wireframes
    if (!resp.ok) {
      throw new Error("Invalid response");
    }

    const data = await resp.json();

    // Validate data based on wireframes
    if (!data) {
      throw new Error("Invalid data");
    }

    // process weather data based on wireframes...
  } catch (error) {
    console.error(error);
    throw error;
  }
}
