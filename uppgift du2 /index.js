document.addEventListener("DOMContentLoaded", () => {
  const citiesContainer = document.getElementById("cities");
  const tableContainer = document.getElementById("table");
  const closestSpan = document.getElementById("closest");
  const furthestSpan = document.getElementById("furthest");
  const h2 = document.querySelector("h2");
  const h3 = document.querySelector("h3");

  const findCity = (cityName) => cities.find((city) => city.name.toLowerCase() === cityName.toLowerCase());

  const calculateDistances = (cityId) =>
    distances
      .filter((d) => d.city1 === cityId || d.city2 === cityId)
      .map((d) => {
        const otherCityId = d.city1 === cityId ? d.city2 : d.city1;
        return { cityId: otherCityId, distance: d.distance };
      });

      const renderCities = () => {
        citiesContainer.innerHTML = "";
        cities.forEach((city) => {
          const cityDiv = document.createElement("div");
          cityDiv.className = "cityBox";
          cityDiv.textContent = city.name;
          cityDiv.dataset.cityId = city.id;
          citiesContainer.appendChild(cityDiv);
        });
      };
      const renderTable = () => {
        tableContainer.innerHTML = "";
    
        const headerDiv = document.createElement("div");
        headerDiv.textContent = ""; 
        headerDiv.classList = "cell";
        headerDiv.style.fontWeight = "bold"; 
        tableContainer.appendChild(headerDiv);
    
        cities.forEach((city) => {
          const cityHeader = document.createElement("div");
          cityHeader.textContent = city.id; 
          cityHeader.style.fontWeight = "bold"; 
          cityHeader.classList = "cell";
          tableContainer.appendChild(cityHeader);
        });


