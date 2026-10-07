const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const geoip = require('geoip-lite');
const app = express();
const port = process.env.PORT || 3500;
const weatherData = require('./utils/weatherData');
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//renders homepage
app.get('/', (req, res, next) => {

    //fetching lat and long with GPS
    const lat = req.query.lat;
    const lng = req.query.lng;

    // If GPS coordinates are available, use reverse geocoding
    if (lat && lng) {
        reverseGeocode(lat, lng)
            .then(location => {
                res.render('index.ejs', {
                    title: 'Weather App',
                    userCity: location.city,
                    userCountry: location.country,
                    lat: lat,
                    lng: lng
                });
            })
            .catch(() => fallbackToIp(req, res)); // Fallback if reverse geocoding fails
    } else {
        // Fallback to IP-based geolocation
        fallbackToIp(req, res);
    }
});

// Reverse geocoding function using a free API like Nominatim
async function reverseGeocode(lat, lng) {
    try {
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = response.data.address;
        return {
            city: data.city || data.town || data.county || 'Unknown',
            country: data.country || 'Unknown'
        };
    } catch (error) {
        throw error;
    }
}

function fallbackToIp(req, res) {
    let clientIp = req.headers['x-forwarded-for']?.split(',')[0].trim()
        || req.socket.remoteAddress;

    if (!/^[\d.:a-f]+$/.test(clientIp)) {
        clientIp = 'Unknown';
    }
    const geo = geoip.lookup(clientIp);

    if (geo) {
        console.log(`User from ${geo.country} (${geo.city}) - IP: ${clientIp}`);

        res.render('index.ejs', {
            title: 'Weather App',
            userIp: clientIp,
            userCountry: geo.country,
            userCity: geo.city
        });
    } else {
        console.log(`could not geolocate IP : ${clientIp} `)
        res.render('index.ejs', {
            title: 'Weather App',
            userIp: clientIp,
            userCountry: 'Unknown',
            userCity: 'Unknown'
        });
    }
}

app.get('/weather', async (req, res) => {
    if (!req.query.address) {
        return res.json({error: 'address is needed'});
    }
    try {
        const result = await weatherData(req.query.address);
        res.json(result);
        console.log('Weather data sent to client');
    } catch (error) {
        res.status(500).json({error: 'Unable to fetch weather data'});
    }
});

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>');
})

// Only listen locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log('server is listening on port ' + port);
    })
}

//export for Vercel
module.exports = app;