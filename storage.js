const STORAGE_KEY_TEMP_UNIT = 'tempUnit';
const STORAGE_KEY_FAVORITES = 'favorites';

export default class Storage {
  
  getTempUnit() {
    return localStorage.getItem(STORAGE_KEY_TEMP_UNIT);
  }

  setTempUnit(unit) {
    localStorage.setItem(STORAGE_KEY_TEMP_UNIT, unit);
  }
  
  getFavorites() {
    const favorites = localStorage.getItem(STORAGE_KEY_FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(favorite) {
    const favorites = this.getFavorites();
    favorites.push(favorite);
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
  }

  removeFavorite(favorite) {
    // Logic to remove favorite 
  }

}
