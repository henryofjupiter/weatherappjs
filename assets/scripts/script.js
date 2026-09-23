/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js"
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
() {

eval("{// const http = require('http');\n// http.createServer((request, response) => {\n//     response.write();\n//     response.end();\n// }).listen();\n\nconst apiKey = '3db8f23e418543c297c215245262009';\nconst apiUrl = 'https://api.weatherapi.com/v1/current.json';\nconst input = document.querySelector('.search input');\nconst searchBtn = document.querySelector('.search button');\nconst weatherIcon = document.querySelector('.weather-icon');\n\nconst skyCondition = (data) => {\n    if ((data.current.cloud) >= 90) {\n        if ((data.current.is_day) === 0) {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rainynight.png'\n            } else {\n                weatherIcon.src = 'images/cloudynight.png'\n            }\n        } else {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rain.png'\n            } else {\n                weatherIcon.src = 'images/cloudy.png'\n            }\n        }\n    } else if (((data.current.cloud) >= 60) && ((data.current.cloud) <= 90)) {\n        if ((data.current.is_day) === 0) {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rainynight.png'\n            } else {\n                weatherIcon.src = 'images/partlycloudynight.png';\n            }\n\n        } else {\n            weatherIcon.src = 'images/partly_cloudy.png';\n        }\n\n    } else if (((data.current.cloud) >= 30) && ((data.current.cloud) <= 60)) {\n        if ((data.current.is_day) === 0) {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rainynight.png'\n            } else {\n                weatherIcon.src = 'images/partlycloudynight.png';\n            }\n\n        } else {\n            weatherIcon.src = 'images/partly_cloudy.png';\n        }\n    } else if (((data.current.cloud) >= 10) && ((data.current.cloud) <= 30)) {\n        if ((data.current.is_day) === 0) {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rainynight.png'\n            } else {\n                weatherIcon.src = 'images/partlycloudynight.png';\n            }\n\n        } else {\n            weatherIcon.src = 'images/partly_cloudy.png';\n        }\n    } else {\n        if ((data.current.is_day) === 0) {\n            if ((data.current.condition.text.includes('rain'))) {\n                weatherIcon.src = 'images/rainynight.png'\n            } else {\n                weatherIcon.src = 'images/nightclearsky.png';\n            }\n\n        } else {\n            weatherIcon.src = 'images/clear_skies.png';\n        }\n    }\n}\n\n\nasync function checkWeather(country) {\n    const response = await fetch(apiUrl + '?&q=' + `${country}` + `&key=${apiKey}`);\n    const data = await response.json();\n\n    console.log(data);\n    document.querySelector(\".city\").innerHTML = data.location.name;\n    document.querySelector(\".temp\").innerHTML = data.current.temp_f + '&deg';\n    document.querySelector(\".humidity\").innerHTML = data.current.humidity + '%';\n    document.querySelector(\".wind\").innerHTML = data.current.wind_kph + ' km/h';\n\n    skyCondition(data);\n}\n\nsearchBtn.addEventListener('click', () => {\n    const userInput = input.value.trim();\n    if (userInput) {\n        checkWeather(userInput).then(() => true);\n    }\n})\n\n//# sourceURL=webpack://weatherappjs/./src/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;