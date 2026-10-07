let weatherApi = '/weather';
const userInput = document.querySelector('.userInput');
const searchBtn = document.querySelector('.btn');
const homepage = document.querySelector('.weather');

//geo data
// userGeoData = {
//     ip: 'userIp',
//     country: 'userCountry',
//     city: 'userCity'
// }
const userCity = userGeoData.city;
const userCountry = userGeoData.country;


// Using Option B (recommended)
console.log('User Geolocation Data:', userGeoData);
console.log('IP:', userGeoData.ip);
console.log('Country:', userGeoData.country);
console.log('City:', userGeoData.city);

// Example: Display user location on the page
const displayUserLocation = () => {
    const locationText = `You are visiting from ${userGeoData.city}, ${userGeoData.country}`;
    console.log(locationText);

    // Display on page (if you have a location element)
    const locationElement = document.querySelector('.user-location');
    if (locationElement) {
        locationElement.innerHTML = locationText;
    }
};

displayUserLocation();


//checks if day--> then change gradients of card & background
const dayGradient = (data) => {
    const dayG = document.querySelector('.card');
    const dayGB = document.querySelector('.changer');

    if ((data.current.is_day) === 1) {
        dayG.style.background = 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)';
        dayGB.style.background = '#054845';
    } else {
        dayG.style.background = 'linear-gradient(10deg, rgba(19, 0, 36, 1) 17%, rgba(28, 28, 176, 1) 55%, rgba(97, 2, 207, 1) 86%)';
        dayGB.style.background = '#12072f';
    }
}

// changes weather icon based on weather conditions
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


// render
const render = (data) => {
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_f + '&deg';
    document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
    document.querySelector(".wind").innerHTML = data.current.wind_kph + ' km/h';
    document.querySelector(".willrain").innerHTML = data.current.chance_of_rain + '% change of rain';

    //output weather condition
    if (data.current.condition.text.includes('Clear') || ((data.current.condition.text.includes('Cloudy')))) {
        document.querySelector(".conditions").innerHTML = data.current.condition.text + ' skies';
    } else {
        // fetch weather conditions
        document.querySelector('.conditions').innerHTML = data.current.condition.text;
    }

}


const showWeather = (city) => {
    const homepage2 = document.getElementById('homepage2');

    getWeatherData(city, (data) => {
        console.log('Weather data received:', data);

        if ((data.location && data.location.name) || (userCountry && userCity)) {
            homepage2.style.display = 'none';
            homepage.classList.remove('weather');
        }

        render(data);
        skyCondition(data);
        dayGradient(data);
    });
}

const getWeatherData = (city, callback) => {
    const location = weatherApi + '?address=' + city;
    fetch(location)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse JSON from response
        })
        .then((data) => {
            callback(data);  // Pass the JSON data to callback
        })
        .catch((error) => {
            console.error('Error fetching weather:', error);
        });
}

// display user location on load
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            console.log(latitude + ' ' + longitude);
            fetch(`/weather?address=${latitude},${longitude}`)
                .then(res => res.json())
                .then(data => showWeather(data));


        }, (error) => {
            console.log('Geolocation not available, using IP fallback');
        })
    } else if (userGeoData.city !== 'Unknown') {
        showWeather(userGeoData.city);
    }
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showWeather(userInput.value);
});
