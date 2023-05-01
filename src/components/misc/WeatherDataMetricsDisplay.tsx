import { Thermometer, ThermometerCold, UmbrellaSimple } from "phosphor-react";
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
                <UmbrellaSimple size={20} weight="bold" />
                <div>
                    <strong>Humidity:</strong>
                    <p>{data.humidity}%</p>
                </div>
            </span>
            <span className={styles["card-status__item"]}>
                <ThermometerCold size={20} weight="bold" />
                <div>
                    <strong>Temp Min:</strong>
                    <p>{setWeather(user.scale, data.temp_min)}</p>
                </div>
            </span>
            <span className={styles["card-status__item"]}>
                <Thermometer size={20} weight="bold" />
                <div>
                    <strong>Temp Max:</strong>
                    <p>{setWeather(user.scale, data.temp_max)}</p>
                </div>
            </span>
        </>
    );
};
