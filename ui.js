export default class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  showCurrentWeather(weather) {
    this.location.textContent = weather.name + ", " + weather.sys.country;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "°C";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`;
    this.dewpoint.textContent = `Dewpoint: ${weather.main.dew_point}°C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
  }

  showError(error) {
    this.location.textContent = "";
    this.desc.textContent = "";
    this.string.textContent = error;
    this.icon.setAttribute("src", "");
    this.humidity.textContent = "";
    this.feelsLike.textContent = "";
    this.dewpoint.textContent = "";
    this.wind.textContent = "";
  }
}
