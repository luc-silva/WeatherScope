import { setWeather } from "../../utils/tools";
import styles from "./WeatherDataMetricsDisplay.module.css";

export const WeatherDataMetricsDisplay = ({
    data,
    user,
}: {
    data: { humidity: number; temp_min: number; temp_max: number };
    user: IUser;
}) => {
    return (
        <>
            <span className={styles["card-status__item"]}>
                <strong>Humidity:</strong>
                <p>{data.humidity}%</p>
            </span>
            <span className={styles["card-status__item"]}>
                <strong>Temp Min:</strong>
                <p>{setWeather(user.scale, data.temp_min)}</p>
            </span>
            <span className={styles["card-status__item"]}>
                <strong>Temp Max:</strong>
                <p>{setWeather(user.scale, data.temp_max)}</p>
            </span>
        </>
    );
};
