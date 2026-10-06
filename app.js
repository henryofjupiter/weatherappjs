const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;
const weatherData = require('./utils/weatherData');
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//renders homepage
app.get('/', (req, res, next) => {
    res.render('index.ejs', {title: 'Weather App'});
});

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