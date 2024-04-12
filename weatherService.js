import { OpenWeatherMapClient } from 'openweathermap-api-node';

export default class WeatherService {
  constructor(apiKey) {
    this.client = new OpenWeatherMapClient({ apiKey });
  }

  async getCurrentWeather(location) {
    return this.client.currentWeather({ location });
  }

  async getForecast(location) {
    return this.client.forecast({ location });
  }

  async searchLocations(query) {
    return this.client.locations({ query });
  }
}
