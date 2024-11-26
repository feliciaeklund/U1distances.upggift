document.addEventListener("DOMContentLoaded", () => {
  const citiesContainer = document.getElementById("cities");
  const tableContainer = document.getElementById("table");
  const closestSpan = document.getElementById("closest");
  const furthestSpan = document.getElementById("furthest");
  const h2 = document.querySelector("h2");
  const h3 = document.querySelector("h3");

  const findCity = (cityName) => cities.find((city) => city.name.toLowerCase() === cityName.toLowerCase());

