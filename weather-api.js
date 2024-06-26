// functions/weather-api.js

const fetch = require("node-fetch");
const API_KEY = "9b8e8824203134875cd82225113718f2";

exports.handler = async function (event) {
  const { location } = event.queryStringParameters;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  try {
    const apiResponse = await fetch(apiUrl);
    const json = await apiResponse.json();

    // Return data formatted for wireframes
    return {
      statusCode: 200,
      body: JSON.stringify({
        location: json.name,
        temp: json.main.temp,
        desc: json.weather[0].description
      })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
