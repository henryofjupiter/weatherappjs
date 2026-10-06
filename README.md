# WeatherAppJS

A lightweight weather web application built with Node.js, Express, EJS, and vanilla JavaScript. It allows users to
search for a city and display the current weather conditions, including temperature, humidity, wind speed, rain chance,
and a dynamic weather icon.

## Features

- Search for weather by city name
- Displays current temperature, humidity, and wind speed
- Shows rain probability and current weather description
- Uses dynamic weather-themed icons and color gradients
- Built with Express and EJS for server-side rendering
- Ready to deploy to platforms such as Vercel

## Tech Stack

- Node.js
- Express.js
- EJS
- Axios
- dotenv
- HTML/CSS/JavaScript

## Project Structure

```text
weatherappjs/
├─ app.js                 # Express server setup and routes
├─ package.json           # Project scripts and dependencies
├─ public/
│  ├─ css/
│  ├─ images/
│  └─ js/
├─ utils/
│  └─ weatherData.js      # Weather API request logic
├─ views/
│  └─ index.ejs           # Main app UI
├─ .gitignore
├─ package-lock.json
└─ README.md
```

# Prerequisites

Before running the app, make sure you have the following:

- API KEY from `https://www.weatherapi.com/`
- Node.js (v18+ recommended)
- npm

# Installation

1. Clone the repository:

```bash
git clone https://github.com/henryofjupiter/weatherappjs.git 
cd weatherappjs 
```

2. install dependencies

```bash
npm install
```

3. create .env file in the project root and add your weather API credentials

```dotenv
API_KEY=your_weather_api_key
API_URL=https://api.weatherapi.com/v1/current.json?q=
```

The app expects a weather API service that supports the current weather endpoint and receives a city value as part of
the request.

# Running the App

start the app locally:

```bash
npm start
```

### Development with auto-reload

- change starting script in `package.json` to `nodemon app.js`

```json
{
  "start": "nodemon app.js"
}
```

## Open browser

```text
http://localhost:3500
```