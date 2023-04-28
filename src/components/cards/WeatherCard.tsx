import {
    calculateKelvinToCelisuis,
    calculateKelvinToFahrenheit,
} from "../../utils/tools";
import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ data }: { data: IWeatherData }) => {
    return (
        <div className={styles["weather-card"]}>
            <div className={styles["weather-card__city"]}>
                <h3>{data.name}</h3>
                <strong>{data.sys.country}</strong>
            </div>
            <div className={styles["weather-card__main"]}>
                <div className={styles["weather-card__status"]}>
                    <span>{`${calculateKelvinToFahrenheit(
                        data.main.temp
                    ).toFixed(2)}F`}</span>
                    <span>{`${calculateKelvinToCelisuis(data.main.temp).toFixed(
                        2
                    )}C`}</span>
                </div>
                <div className={styles["weather-card__condition"]}>
                    <p>{data.weather[0].description}</p>
                    <div>
                        <img
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
