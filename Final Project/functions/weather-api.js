// functions/weather-api.js

const fetch = require('node-fetch');
const API_KEY = 'YOUR_OPENWEATHER_API_KEY';

exports.handler = async function(event) {

  const { location } = event.queryStringParameters;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  try {
    const apiResponse = await fetch(apiUrl);
    const json = await apiResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify(json)
    }
  } catch(error) {
    return { statusCode: 500, body: error.toString() }
  }

}
