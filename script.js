// import {fetchWeatherApi} from "openmeteo";

const apiKey = '3db8f23e418543c297c215245262009';
const apiUrl = 'http://api.weatherapi.com/v1/current.json?';
let country = 'London';

async function checkWeather() {
    const response = await fetch(apiUrl  + `&q=${country}` + `&key=${apiKey}`);
    return await response.json();
   
}
checkWeather().then((data) => {
        
}).catch((error) => {
    console.error('error:', error);
});