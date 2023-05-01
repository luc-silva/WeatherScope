import WeatherService from "../../services/WeatherService";

import { DisplayInfo } from "./DisplayInfo";
import { useEffect, useState } from "react";
import { initialWeatherData } from "../../constants/defaultData";
import { MainDisplayImage } from "./MainDisplayImage";

import styles from "./MainDisplay.module.css";

export const MainDisplay = ({ city, user }: { city: string; user: IUser }) => {
    let [weatherData, setWeatherData] = useState(initialWeatherData);
    let [isError, toggleError] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            WeatherService.getWeatherStatusFromCity(city)
                .then((data) => {
                    setWeatherData(data);
                    toggleError(false);
                })
                .catch(() => {
                    toggleError(true);
                });
        };

        fetchData();
        let interval = setInterval(fetchData, 300000);

        return () => clearInterval(interval);
    }, [city]);
    return (
        <div className={styles["main-display"]}>
            <span className={styles["main-display__tip"]}>
                Click above the temperature to change its format
            </span>
            <div className={styles["main-display__image"]}>
                <MainDisplayImage weatherStatus={weatherData.weather[0].main} />
            </div>
            <div className={styles["main-display__info"]}>
                {(isError && (
                    <strong>
                        Error while processing the data. Try changing the location.
                    </strong>
                )) || <DisplayInfo data={weatherData} user={user} />}
            </div>
        </div>
    );
};
