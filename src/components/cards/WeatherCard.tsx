import { useEffect, useState } from "react";
import {
    calculateKelvinToCelsius,
    calculateKelvinToFahrenheit,
    upperCaseFirstLetter,
} from "../../utils/tools";
import styles from "./WeatherCard.module.css";
import { initialWeatherData } from "../../constants/defaultData";
import WeatherService from "../../services/WeatherService";
import { WeatherCardErrorOverlay } from "../errorOverlays/WeatherCardErrorOverlay";

export const WeatherCard = ({ city }: { city: string }) => {
    let [weatherData, setWeatherData] = useState(initialWeatherData);
    let [isLoading, toggleLoading] = useState(true);
    let [isError, toggleError] = useState(false);

    useEffect(() => {
        if (city) {
            WeatherService.getWeatherStatusFromCity(city)
                .then((data) => {
                    setWeatherData(data);
                })
                .then(() => {
                    toggleLoading(false);
                    toggleError(false);
                })
                .catch(() => {
                    toggleError(true);
                });
        }
    }, [city]);
    return (
        <div className={styles["weather-card"]}>
            {(isError && <WeatherCardErrorOverlay />) || (
                <>
                    <div className={styles["weather-card__city"]}>
                        <h3>{weatherData.name}</h3>
                        <strong>{weatherData.sys.country}</strong>
                    </div>
                    <div className={styles["weather-card__main"]}>
                        <div className={styles["weather-card__status"]}>
                            <span>{`${calculateKelvinToFahrenheit(
                                weatherData.main.temp
                            ).toFixed(2)}F`}</span>
                            <span>{`${calculateKelvinToCelsius(
                                weatherData.main.temp
                            ).toFixed(2)}C`}</span>
                        </div>
                        <div className={styles["weather-card__condition"]}>
                            <p>
                                {upperCaseFirstLetter(
                                    weatherData.weather[0].description
                                )}
                            </p>
                            <div>
                                <img
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
