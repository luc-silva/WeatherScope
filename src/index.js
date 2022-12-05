let settings = (function () {
	let temperatureUnit = "metric";
	let city = "Sao Paulo";

	return { temperatureUnit, city };
})();

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
	};

	let checkWeatherCondition = function () {
		let weatherStatus = document.querySelector("#weather-status");
		let status = weatherData.weather[0].description;

		status = upperize(status);

		weatherStatus.textContent = `${status}`;
	};

	let upperize = (status) => {
		status = status.split(" ");
		let newStatus = [];
		status.forEach((word) => {
			word = word.split("");
			word[0] = word[0].toUpperCase();
			word = word.join("");
			newStatus.push(word);
		});
		newStatus = newStatus.join(" ");
		return newStatus;
	};

	weatherTemperature.addEventListener("click", showTemperature);
	showTemperature();
})();

async function getData(city = "London", unit = "metric") {
	try {
		let response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${unit}`
		);
		let data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		throw new Error(`Wasn't possible to fetch data from API. ${error}`);
	}
}

export default settings;
