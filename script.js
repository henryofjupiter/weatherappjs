// import {fetchWeatherApi} from "openmeteo";

const apiKey = '3db8f23e418543c297c215245262009';
const apiUrl = 'http://api.weatherapi.com/v1/current.json?';
let country = 'London';

async function checkWeather() {
    const response = await fetch(apiUrl  + `&q=${country}` + `&key=${apiKey}`);
    return await response.json();
   
}
checkWeather().then((data) => {
    console.log(data);
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = data.current.temp_f + '&degc';
        document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
        document.querySelector(".wind").innerHTML = data.current.wind_kph + ' km/h';

}).catch((error) => {
    console.error('error:', error);
});