const axios = require("axios");
require('dotenv').config();

const weatherObj = {
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URL
}

//requires user input
async function weatherData(address) {
    const url = (weatherObj.apiUrl +
        encodeURIComponent(address) +
        `&key=${weatherObj.apiKey}`);
    console.log(url);

    try {
        //fetch data from new constructed url
        const response = await axios.get(url);

        //return data
        const weather = response.data;
        console.log(weather);
        console.log('at async function block')
        return weather;

    } catch (error) {
        console.error('fetch operation failed: ', error);
        throw error;
    }
}

module.exports = weatherData;