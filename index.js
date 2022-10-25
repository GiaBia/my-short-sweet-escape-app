const displaySection = document.querySelector("#display-section");
const searchFlightsbtn = document.querySelector('#searchFlights-btn');

const baseURL = `http://localhost:4000`;
const getWeatherforKeyCities = () => {
    console.log("hit");

    axios.get(`${baseURL}/api/weather/cities`)
        .then((res) => {
            console.log(res.data);
            createCard(res.data);
        })
        .catch((err) => console.log(err));
};
getWeatherforKeyCities()

function createCard(cities) {
    displaySection.innerHTML = "";
    cities[displaySection.dataset.city].list.forEach((city) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.style.width = "10rem";
        newDiv.style.height = "10rem";
        newDiv.classList.add("mt-5");
        newDiv.innerHTML = `
       <div class="scrolling-wrapper" style="overflow-x: scroll;
       overflow-y: hidden; 
       border-radius: 0.5rem
       white-space: nowrap;
       background-color:pink;
       width: 100px;
       
       white-space: nowrap;> 
        <div class="card-group" style="max-width: 18rem display:inline-block;">
            <div class="card-header">${city.dt_txt}</div>
            <div class="card-body">
            <h5 class="card-title">Current Weather</h5>
            <p class="card-text">${city.main.temp}°F</p>
            
            <span class="card-text">feels like ${city.main.feels_like}°F</span>
        </div> 
        </div>`;

        displaySection.appendChild(newDiv);

    });

};

function comingSoon() {
    alert('This feature will be available soon!')
};

searchFlightsbtn.addEventListener('click', comingSoon)


