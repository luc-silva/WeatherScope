import styles from "./WeatherImage.module.css";

export const WeatherImage = ({ iconName }: { iconName: string }) => {
    return (
        <img
            src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
            loading="lazy"
            alt="Weather Image Icon"
            className={styles["weather-icon"]}
        />
    );
};
