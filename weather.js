
const weather = document.querySelector(".js-weather");


const API_KEY = "2e140f89d0dbb49d70be9adae5f8a20c";
const COORDS = "coords";


function getWaether(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (respons) {
        return respons.json();
    })
        .then(function (json) {
            const temperrature = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temperrature}@${place}`;
        }
        )
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}


function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWaether(latitude, longitude);
}

function handleGeoError() {
    console.log("can't access geo location");

}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    }
    else {
        const parseCoords = JSON.parse(loadedCoords);
        getWaether(parseCoords.latitude, parseCoords.longitude);
    }
}



function init() {
    loadCoords();
}
init();