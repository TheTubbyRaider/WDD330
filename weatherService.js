import { OpenWeatherMapClient } from 'openweathermap-api-node';

export default class WeatherService {
  constructor(apiKey) {
    this.client = new OpenWeatherMapClient({ apiKey });
  }

  async getCurrentWeather(location) {
    return this.client.currentByCityName(location); 
  }
}
