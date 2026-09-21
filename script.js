const apiKey = '3db8f23e418543c297c215245262009';
const apiUrl = 'http://api.weatherapi.com/v1/current.json';
const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(country) {
    const response = await fetch(apiUrl  + '?&q='+ `${country}` + `&key=${apiKey}`);
    const data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_f + '&deg';
    document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
    document.querySelector(".wind").innerHTML = data.current.wind_kph + ' km/h';
    
    if ((data.current.cloud) >= 90) {
        if ((data.current.is_day) === 0) {
            weatherIcon.src = 'images/cloudynight.png';
        }
        else {
            weatherIcon.src ='images/cloudyday.png'

        }
    }
    else if (((data.current.cloud) >= 60) && ((data.current.cloud) <= 90)) {
        if ((data.current.is_day) === 0) {
            weatherIcon.src = 'images/partlycloudynight.png';
        }
        else {
            weatherIcon.src = 'images/partly_cloudy.png';
        }
    }
    else if (((data.current.cloud) >= 30) && ((data.current.cloud) <= 60))  {
        if ((data.current.is_day) === 0) {
            weatherIcon.src = 'images/partlycloudynight.png';
        }
        else {
            weatherIcon.src = 'images/partly_cloudy.png';
        } 
    }
    else if (((data.current.cloud) >= 10) && ((data.current.cloud) <= 30))  {
        if ((data.current.is_day) === 0) {
            weatherIcon.src = 'images/partlycloudynight.png';
        }
        else {
            weatherIcon.src = 'images/partly_cloudy.png';
        }
    }
    else {
        if ((data.current.is_day) === 0) {
            weatherIcon.src = 'images/nightclearsky.png';
        }
        else {
            weatherIcon.src = 'images/clear_skies.png';
        }
    }
}

searchBtn.addEventListener('click', () => {
    const userInput = input.value.trim();
    if (userInput){
       checkWeather(userInput).then(r => true); 
    }
})