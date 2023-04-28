import WeatherService from "../../services/WeatherService";
import { useEffect, useState } from "react";
import { initialWeatherData } from "../../constants/defaultData";
import { WeatherDataMetricsDisplay } from "../misc/WeatherDataMetricsDisplay";
import { WeatherDataTempDisplay } from "../misc/WeatherDataTempDisplay";
import { upperCaseFirstLetter } from "../../utils/tools";

import { X } from "phosphor-react";
import styles from "./SearchedCityCard.module.css";

export const SearchedCityCard = ({
    city,
    toggle,
}: {
    city: string;
    toggle: Function;
}) => {
    let [weatherData, setWeatherData] = useState(initialWeatherData);

    function closeCard() {
        toggle(false);
    }

    useEffect(() => {
        if (city) {
            WeatherService.getWeatherStatusFromCity(city).then(setWeatherData);
        }
    }, [city]);
    return (
        <div className={styles["card"]}>
            <div className={styles["card__main"]}>
                <div className={styles["card__temperature-about"]}>
                    <h2>{`${weatherData.name} - ${weatherData.sys.country}`}</h2>
                    <p>{upperCaseFirstLetter(weatherData.weather[0].description)}</p>
                </div>
            </div>
            <div className={styles["card__temperature-status__main"]}>
                <div className={styles["status__metrics"]}>
                    <WeatherDataMetricsDisplay data={weatherData.main} />
                </div>
                <div className={styles["status__temp"]}>
                    <WeatherDataTempDisplay data={weatherData} />
                </div>
            </div>
            <div className={styles["close-btn"]}>
                <X size={30} onClick={closeCard} />
            </div>
        </div>
    );
};
