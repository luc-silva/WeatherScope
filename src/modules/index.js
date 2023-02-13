import { getData, settings } from "./fetch.js";
import {
	createWeatherPanel,
	createSettingsPanel,
	weatherAppDomManipulator,
} from "./dom-manipulator.js";

let weatherApp = (async function () {
	let weatherTemperature = document.querySelector("#weather-temperature");
	let weatherData = await getData();

	let showTemperature = async function () {
		if (settings.temperatureUnit == "metric") {
			settings.temperatureUnit = "imperial";
			weatherData = await getData(
				settings.city,
				settings.temperatureUnit
			);
			weatherTemperature.textContent = `${weatherData.main.temp}°F`;
		} else {
			settings.temperatureUnit = "metric";
			weatherData = await getData(
				settings.city,
				settings.temperatureUnit
			);
			weatherTemperature.textContent = `${weatherData.main.temp}°C`;
		}
		checkWeatherCondition();
		checkCity();
	};

	let checkWeatherCondition = function () {
		let weatherStatus = document.querySelector("#weather-status");
		let status = weatherData.weather[0].description;
		status = upperize(status);
		weatherStatus.textContent = `${status}`;

		switch (weatherData.weather[0].main) {
			case "Rain":
				weatherAppDomManipulator.changeBackground(
					"../src/img/raining.jpg"
				);
				break;

			case "Thunderstorm":
				weatherAppDomManipulator.changeBackground(
					"../src/img/thunderstorm.jpg"
				);
				break;

			case "Clouds":
				weatherAppDomManipulator.changeBackground(
					"../src/img/cloudy.jpg"
				);
				break;

			case "Snow":
				weatherAppDomManipulator.changeBackground(
					"../src/img/snow.jpg"
				);
				break;

			case "Drizzle":
				weatherAppDomManipulator.changeBackground(
					"../src/img/drizzle.jpg"
				);
				break;

			default:
				weatherAppDomManipulator.changeBackground(
					"../src/img/clear.jpg"
				);
				break;
		}
	};

	//panel buttons
	let settingsBtn = document.querySelector("#settings-button");
	settingsBtn.addEventListener("click", createSettingsPanel);

	let weatherBtn = document.querySelector("#weather-tab-btn");
	weatherBtn.addEventListener("click", createWeatherPanel);

	weatherTemperature.addEventListener("click", showTemperature);
	showTemperature();
})();
