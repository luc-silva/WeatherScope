import { useEffect, useState } from "react";
import styles from "./DisplayInfo.module.css";

export const DisplayInfo = () => {
    let [isCelsius, toggleUnit] = useState(true);
    let [actualTemperature, setActualTemperature] = useState(40);
    
    useEffect(() => {
        if (isCelsius) {
            let celsius = (actualTemperature - 32) * (5 / 9);
            setActualTemperature(celsius);
        } else {
            let fahrenheit = actualTemperature * (9 / 5) + 32;
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
