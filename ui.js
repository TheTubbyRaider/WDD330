export default class UI {
  constructor() {
    this.locationEl = document.getElementById('location');
    this.iconEl = document.getElementById('icon');
    this.temperatureEl = document.getElementById('temperature');
  }

  showCurrentWeather(weather) {
    this.locationEl.textContent = weather.name;
    this.iconEl.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.temperatureEl.textContent = `${weather.main.temp}°C`; 
  }
}
