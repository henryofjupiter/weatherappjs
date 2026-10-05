const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;
const weatherData = require('./utils/weatherData');
app.set('views engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//renders homepage
app.get('/', (req, res, next) => {
    res.render('index.ejs', {title: 'Weather App'});
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send('address is needed');
    }
    weatherData(req.query.address, (error, result) => {
        if (error) {
            return res.send(error);
        }
        res.send(result);
    });
});

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>');
})


app.listen(port, () => {
    console.log('server is listening on port ' + port);
})