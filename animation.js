export default class Animation {
  constructor() {
    // Initialize animation elements
    this.backgroundElement = document.getElementById('background');
    this.weatherIconElement = document.getElementById('weather-icon');
  }

  setBackground(weather) {
    // Set background based on weather condition
    switch (weather) {
      case 'clear':
        this.backgroundElement.style.background = '#F2C94C'; // Bright sunny yellow
        break;
      case 'rain':
        this.backgroundElement.style.background = '#6C85A6'; // Rainy blue
        break;
      case 'snow':
        this.backgroundElement.style.background = '#B9C6CB'; // Snowy light blue
        break;
      default:
        this.backgroundElement.style.background = '#FFFFFF'; // Default white
    }
  }

  animateWeatherIcon(icon) {
    // Animate weather icon based on current condition
    switch (icon) {
      case 'clear':
        this.weatherIconElement.classList.add('sunny'); // Add sunny animation class
        break;
      case 'rain':
        this.weatherIconElement.classList.add('rainy'); // Add rainy animation class
        break;
      case 'snow':
        this.weatherIconElement.classList.add('snowy'); // Add snowy animation class
        break;
      default:
        // No specific animation for other conditions
    }
  }

  changeBackgroundIntensity(intensity) {
    // Adjust background animation intensity
    this.backgroundElement.style.opacity = intensity;
  }

  startRainAnimation() {
    // Start rain particle animation
    const rainParticles = document.getElementsByClassName('rain-particle');
    for (let particle of rainParticles) {
      particle.classList.add('falling'); // Add falling animation class to each rain particle
    }
  }

  startSnowAnimation() {
    // Start snow particle animation
    const snowParticles = document.getElementsByClassName('snow-particle');
    for (let particle of snowParticles) {
      particle.classList.add('falling'); // Add falling animation class to each snow particle
    }
  }

  stopPrecipitation() {
    // Stop rain or snow animation
    const fallingParticles = document.querySelectorAll('.falling');
    for (let particle of fallingParticles) {
      particle.classList.remove('falling'); // Remove falling animation class from all falling particles
    }
  }
}
