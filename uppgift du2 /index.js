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

 cities.forEach((cityRow, rowIndex) => {
  const rowHeader = document.createElement("div");
  const rowHeaderCity = cityRow.name;
  const rowHeaderCityId = cityRow.id;
  rowHeader.textContent = `${rowHeaderCityId} ${rowHeaderCity}`;
  rowHeader.style.fontWeight = "bold"; 
  rowHeader.classList = "cell";
  if (rowIndex % 2 === 1) {
    rowHeader.classList.add("even_row");
  }
  tableContainer.appendChild(rowHeader);

      cities.forEach((cityCol, colIndex) => {
        const cell = document.createElement("div");
        if (cityRow.id === cityCol.id) {
          cell.textContent = ""; 
          cell.classList = "cell";
        } else {
          const distance = distances.find(
            (d) =>
              (d.city1 === cityRow.id && d.city2 === cityCol.id) ||
              (d.city2 === cityRow.id && d.city1 === cityCol.id)
          );

          const updateUI = (targetCity, closest, furthest) => {
            h2.textContent = targetCity.name;
            h3.style.display = "block";
            closestSpan.textContent = `${cities[closest.cityId].name} (${(closest.distance).toFixed(0)} mil)`;
            furthestSpan.textContent = `${cities[furthest.cityId].name} (${(furthest.distance / 10).toFixed(0)} mil)`;
        
            document.querySelectorAll(".cityBox").forEach((cityDiv) => {
              cityDiv.style.backgroundColor = "";
              cityDiv.style.color = "";
            });
        
            const targetDiv = document.querySelector(`[data-city-id="${targetCity.id}"]`);
            const closestDiv = document.querySelector(`[data-city-id="${closest.cityId}"]`);
            const furthestDiv = document.querySelector(`[data-city-id="${furthest.cityId}"]`);
        
            [targetDiv].forEach((div) => {
              div.classList = "cityBox target";
            });            });

            [closestDiv].forEach((div) => {
              div.classList = "cityBox closest";
              const cityName = cities[closest.cityId].name;
              const distance = (closest.distance / 10).toFixed(0);
              div.textContent = `${cityName} ligger ${distance} mil bort`;
            });
        
            [furthestDiv].forEach((div) => {
              div.classList = "cityBox furthest";
              const cityName = cities[furthest.cityId].name;
              const distance = (furthest.distance / 10).toFixed(0); 
              div.textContent = `${cityName} ligger ${distance} mil bort`;
            });
          };
        
  
  const handleNotFound = (cityName) => {
    h2.textContent = cityName;
    h3.textContent = "Staden finns inte i databasen";
    h3.style.color = "red";
    closestSpan.textContent = "";
    furthestSpan.textContent = "";
    document.title = "Not Found";
  };


 
  renderCities();
  renderTable();
  handleCitySearch();
});
          