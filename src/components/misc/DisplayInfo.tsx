import { useEffect, useState } from "react";
import styles from "./DisplayInfo.module.css";
import {
    calculateKelvinToCelsius,
    calculateKelvinToFahrenheit,
    upperCaseFirstLetter,
} from "../../utils/tools";

export const DisplayInfo = ({
    data,
    user,
}: {
    data: IWeatherData;
    user: IUser;
}) => {
    let [isCelsius, toggleUnit] = useState(true);

    return (
        <>
            <div className={styles["weather-city"]}>{data.name}</div>
            <div className={styles["weather-status-display"]}>
                <div className={styles["weather-status"]}>
                    {upperCaseFirstLetter(data.weather[0].description)}
                </div>
                <div
                    className={styles["weather-temperature"]}
                    onClick={() => {
                        toggleUnit(!isCelsius);
                    }}
                >
                    {(isCelsius &&
                        `${calculateKelvinToCelsius(data.main.temp).toFixed(
                            2
                        )} °C`) ||
                        `${calculateKelvinToFahrenheit(data.main.temp).toFixed(
                            2
                        )} °F`}
                </div>
            </div>
        </>
    );
};
