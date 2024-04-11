// ui.js

export default class UI {
  constructor() {
    this.loadingEl = document.getElementById("loading");
  }

  showLoading() {
    this.loadingEl.style.visibility = "visible";
  }

  hideLoading() {
    this.loadingEl.style.visibility = "hidden";
  }

  showCurrentWeather(weather) {
    // Display temperature
    document.getElementById("temp").innerText = weather.temp;

    // Display weather icon
    let img = document.createElement("img");
    img.src = weather.iconUrl;
    img.alt = weather.description;
    document.getElementById("weather-icon").appendChild(img);

    // Display description
    document.getElementById("weather-desc").innerText = weather.description;
  }

  showMap(weather) {
    // Show weather data on map
    addMarker(weather.location);
  }

  share() {
    if (navigator.share) {
      navigator.share(weatherData)
        .then(() => console.log("Shared!"))
        .catch(err => console.error(err));
    } else {
      // fallback sharing 
    }
  }
}

// Map module

function initMap() {
  // init map
}

function addMarker(location) {
  // add marker
}

// Accessibility

<div>
  <img src="..." alt="Weather icon" />

  <button aria-label="Close modal">
    <span class="close-icon">X</span>
  </button>
</div>

// Ensure sufficient color contrast
export function showLoading() {
  // update DOM to display loading indicator
}

export function showWeather(weatherData) {
  // update DOM to display weather data
}

export function showError(error) {
  // update DOM to display error message  
}
