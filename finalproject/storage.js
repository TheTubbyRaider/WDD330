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

try {
  // Add loading indicator
  document.getElementById("loading").style.display = "block";

  // Fetch API data
  const response = await fetch("/api/data");

  // Handle errors
  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  // Hide loading indicator
  document.getElementById("loading").style.display = "none";

  // Process data
  const data = await response.json();
  // ...
} catch (error) {
  console.error(error);
  alert("Error fetching data. Please try again later.");
}

// Map view
const map = new Map();

// Data sharing
function share() {
  if (navigator.share) {
    navigator.share({
      title: "Title",
      text: "Text",
      url: "URL",
    });
  } else {
    // fallback
  }
}

// Accessibility
function addAltText(img) {
  img.alt = "Description of image";
}

function checkContrast(el) {
  const contrast = getContrast(el.style.color, el.style.backgroundColor);
  if (contrast < 4.5) {
    el.style.color = "black"; // increase contrast
  }
}
