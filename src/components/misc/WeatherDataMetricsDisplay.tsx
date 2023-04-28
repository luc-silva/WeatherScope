import styles from "./WeatherDataMetricsDisplay.module.css";

export const WeatherDataMetricsDisplay = ({
    data,
}: {
    data: { humidity: number; temp_min: number; temp_max: number };
}) => {
    return (
        <>
            <span className={styles["card-status__item"]}>
                <strong>Humidity:</strong>
                {data.humidity}
            </span>
            <span className={styles["card-status__item"]}>
                <strong>Temp Min:</strong>
                {data.temp_min}
            </span>
            <span className={styles["card-status__item"]}>
                <strong>Temp Max:</strong>
                {data.temp_max}
            </span>
        </>
    );
};
