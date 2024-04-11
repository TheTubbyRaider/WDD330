// Get API key
const API_KEY = "YOUR_API_KEY"; 

// Attach event listener on page load
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('search-button').addEventListener('click', () => {

    const city = document.getElementById('city-input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {

        document.getElementById('city-name').textContent = data.name;
        document.getElementById('weather-description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°F`;

      });

  });

});
