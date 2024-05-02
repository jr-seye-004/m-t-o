const chercheBtn = document.querySelector("#search-btn");
const chercheInput = document.querySelector("#search-input");
const emplacementEl = document.querySelector("#localisation");
const tempertureEl = document.querySelector("#temperature");
const descriptionEl = document.querySelector("#description");

chercheBtn.addEventListener('click', () => {
    const ville = chercheInput.value; 
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=223f7cdb9a814937d440c9940066310e`)
     .then(response => response.json())
     .then(donnees => {
        emplacementEl.textContent = donnees.name;
        tempertureEl.textContent = `Temperature: ${donnees.main.temp} °F`;
        descriptionEl.textContent =`Description $ {donnees.weather[0].description}`;
     })
})
