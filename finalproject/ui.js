// ui.js

export default class UI {

    constructor() {
      this.loadingEl = document.getElementById('loading');
    }
  
    showLoading() {
      this.loadingEl.style.visibility = 'visible';
    }
  
    hideLoading() {
      this.loadingEl.style.visibility = 'hidden'; 
    }
  
    showCurrentWeather(weather) {
      // Display weather data  
    }
  
    showMap(weather) {
      // Show weather data on map
    }
  
    share() {
      if (navigator.share) {
        navigator.share(weatherData) 
          .then(() => console.log('Shared!'))
          .catch(err => console.error(err))
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
  