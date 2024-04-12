// Storage Module
export default class Storage {
  constructor() {
    // Initialize storage
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
}
