try {
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw {
      name: "FetchError",
      message: `Error fetching ${url}: ${response.status} ${response.statusText}`,
    };
  }

  return json;
} catch (err) {
  if (err.name === "FetchError") {
    throw err;
  } else {
    throw new Error(`Error fetching ${url}`);
  }
}
