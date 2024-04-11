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

  removeFavorite(favorite) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((f) => f !== favorite);
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
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

  static removeFavorite(city) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((c) => c !== city);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // other methods for getting/removing favorites
}
