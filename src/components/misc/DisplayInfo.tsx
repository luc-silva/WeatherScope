import { useEffect, useState } from "react";
import styles from "./DisplayInfo.module.css";
import { calculateCelsius, calculateFahrenheit } from "../../utils/tools";

export const DisplayInfo = ({
    data,
    user,
}: {
    data: IWeatherData;
    user: IUser;
}) => {
    let [isCelsius, toggleUnit] = useState(true);
    let [actualTemperature, setActualTemperature] = useState(40);

    useEffect(() => {
        if (user.scale === "celsius") {
            let celsius = calculateCelsius(actualTemperature);
            setActualTemperature(celsius);
        } else {
            let fahrenheit = calculateFahrenheit(actualTemperature);
            setActualTemperature(fahrenheit);
        }
    }, [isCelsius]);

    return (
        <>
            <div className={styles["weather-city"]}>London</div>
            <div className={styles["weather-status-display"]}>
                <div className={styles["weather-status"]}>Clear Skies</div>
                <div
                    className={styles["weather-temperature"]}
                    onClick={() => {
                        toggleUnit(!isCelsius);
                    }}
                >
                    {(isCelsius && `${actualTemperature.toFixed(2)} C`) ||
                        `${actualTemperature.toFixed(2)} F`}
                </div>
            </div>
        </>
    );
};
