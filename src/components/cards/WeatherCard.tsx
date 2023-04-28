import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ data }: { data: IWeatherData }) => {
    return (
        <div className={styles["weather-card"]}>
            <span className={styles["weather-card-city"]}></span>
            <div className={styles["weather-card-status-container"]}>
                <div className={styles["weather-card-status"]}>
                    <span>12F</span>
                    <span>24C</span>
                </div>
            </div>
            <div className={styles["weather-card-condition"]}>
                Clear Sky *logo*
            </div>
        </div>
    );
};
