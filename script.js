const apiKey = '3db8f23e418543c297c215245262009';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';
const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

//checks if day--> then change gradients of card & background
const dayGradient = (data) => {
    const dayG = document.querySelector('.card');
    const dayGB = document.querySelector('.changer');
    
    if ((data.current.is_day) === 1) {
        dayG.style.background = 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)';
        dayGB.style.background = '#054845';
    }
    else {
        dayG.style.background = 'linear-gradient(10deg, rgba(19, 0, 36, 1) 17%, rgba(28, 28, 176, 1) 55%, rgba(97, 2, 207, 1) 86%)';
        dayGB.style.background = '#12072f';
    }
}


const skyCondition = (data) => {
    const weatherIcon = document.querySelector('.weather-icon');
    
    if ((data.current.cloud) >= 90) {
        if ((data.current.is_day) === 0) {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rainynight.png'
            } else {
                weatherIcon.src = 'images/cloudynight.png'
            }
        } else {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rain.png'
            } else {
                weatherIcon.src = 'images/cloudy.png'
            }
        }
    } else if (((data.current.cloud) >= 60) && ((data.current.cloud) <= 90)) {
        if ((data.current.is_day) === 0) {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rainynight.png'
            } else {
                weatherIcon.src = 'images/partlycloudynight.png';
            }

        } else {
            weatherIcon.src = 'images/partly_cloudy.png';
        }

    } else if (((data.current.cloud) >= 30) && ((data.current.cloud) <= 60)) {
        if ((data.current.is_day) === 0) {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rainynight.png'
            } else {
                weatherIcon.src = 'images/partlycloudynight.png';
            }

        } else {
            weatherIcon.src = 'images/partly_cloudy.png';
        }
    } else if (((data.current.cloud) >= 10) && ((data.current.cloud) <= 30)) {
        if ((data.current.is_day) === 0) {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rainynight.png'
            } else {
                weatherIcon.src = 'images/partlycloudynight.png';
            }

        } else {
            weatherIcon.src = 'images/partly_cloudy.png';
        }
    } else {
        if ((data.current.is_day) === 0) {
            if ((data.current.condition.text.includes('rain'))) {
                weatherIcon.src = 'images/rainynight.png'
            } else {
                weatherIcon.src = 'images/nightclearsky.png';
            }

        } else {
            weatherIcon.src = 'images/clear_skies.png';
        }
    }
}

//render 
const render = (data) => {
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_f + '&deg';
    document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
    document.querySelector(".wind").innerHTML = data.current.wind_kph + ' km/h';
    document.querySelector(".willrain").innerHTML = data.current.chance_of_rain + '% change of\ rain';
    
    //output weather condition
    if (data.current.condition.text.includes('Clear') || ((data.current.condition.text.includes('Cloudy')))){
        document.querySelector(".conditions").innerHTML = data.current.condition.text + ' skies';
    }
    else {
        // fetch weather conditions
        document.querySelector('.conditions').innerHTML = data.current.condition.text;
    }
    
}

// fetch data from api
async function checkWeather(country) {
    const response = await fetch(apiUrl + '?&q=' + `${country}` + `&key=${apiKey}`);
    const data = await response.json();
    
    //renders data to html-> displays sky conditions
    render(data);
    skyCondition(data);
    dayGradient(data);
}

searchBtn.addEventListener('click', () => {
    const userInput = input.value.trim();
    if (userInput) {
        checkWeather(userInput).then(r => true);
    }
})
