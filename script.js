// import {fetchWeatherApi} from "openmeteo";

const apiKey = '3db8f23e418543c297c215245262009';
const apiUrl = 'http://api.weatherapi.com/v1/current.json';
let count = 'London';

const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(country) {
    const response = await fetch(apiUrl  + '?&q='+ `${country}` + `&key=${apiKey}`);
    const data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_f + '&deg';
    document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
    document.querySelector(".wind").innerHTML = data.current.wind_kph + ' km/h';
    
    
}

searchBtn.addEventListener('click', () => {
    const userInput = input.value.trim();
    if (userInput){
       checkWeather(userInput).then(r => true); 
    }
})