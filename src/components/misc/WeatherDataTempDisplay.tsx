import {
    calculateKelvinToCelsius,
    calculateKelvinToFahrenheit,
} from "../../utils/tools";
import styles from "./WeatherDataTempDisplay.module.css";

export const WeatherDataTempDisplay = ({ data }: { data: IWeatherData }) => {
    return (
        <>
            <div className={styles["temp-display"]}>
                <h3>{`${calculateKelvinToCelsius(data.main.temp).toFixed(2)} C°`}</h3>
                <em>
                    {`${calculateKelvinToFahrenheit(data.main.temp).toFixed(2)} F°`}
                </em>
            </div>
            <div className={styles["icon-display"]}>
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt=""
                />
            </div>
        </>
    );
};
