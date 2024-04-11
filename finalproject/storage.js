const STORAGE_KEY_UNIT = "unit";
const STORAGE_KEY_FAVORITES = "favorites";

export default class Storage {
  getUnit() {
    return localStorage.getItem(STORAGE_KEY_UNIT);
  }

  addFavorite(favorite) {
    let favorites = this.getFavorites();
    favorites.push(favorite);
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITES)) || [];
  }
}

export class Storage {
  static addFavorite(city) {
    let favorites = this.getFavorites();
    favorites.push(city);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  static getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  // other methods for getting/removing favorites
}
