import {
    calculateKelvinToCelsius,
    calculateKelvinToFahrenheit,
} from "../../utils/tools";
import { WeatherImage } from "./WeatherImage";

import styles from "./WeatherDataTempDisplay.module.css";

export const WeatherDataTempDisplay = ({ data }: { data: IWeatherData }) => {
    return (
        <>
            <div className={styles["temp-display"]}>
                <h3>{`${calculateKelvinToCelsius(data.main.temp).toFixed(
                    2
                )} C°`}</h3>
                <em>
                    {`${calculateKelvinToFahrenheit(data.main.temp).toFixed(
                        2
                    )} F°`}
                </em>
            </div>
            <div className={styles["icon-display"]}>
                <WeatherImage iconName={data.weather[0].icon} />
            </div>
        </>
    );
};
