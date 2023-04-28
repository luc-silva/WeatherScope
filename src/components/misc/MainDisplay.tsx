import WeatherService from "../../services/WeatherService";

import { DisplayInfo } from "./DisplayInfo";
import { useEffect, useState } from "react";
import { initialWeatherData } from "../../constants/defaultData";

import image from "../../img/clear.jpg";
import styles from "./MainDisplay.module.css";

export const MainDisplay = ({ city, user }: { city: string; user: IUser }) => {
    let [weatherData, setWeatherData] = useState(initialWeatherData);
    useEffect(() => {
        WeatherService.getWeatherStatusFromCity( city).then(
            (data) => {
                console.log(data)
                setWeatherData(data);
            }
        );
    }, [city]);
    return (
        <div className={styles["main-display"]}>
            <span className={styles["main-display__tip"]}>
                Click above the temperature to change its format
            </span>
            <div className={styles["main-display__image"]}>
                <img src={image} />
            </div>
            <div className={styles["main-display__info"]}>
                <DisplayInfo data={weatherData} user={user} />
            </div>
        </div>
    );
};
