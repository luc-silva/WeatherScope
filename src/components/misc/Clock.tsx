import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export const Clock = () => {
    let [time, setTime] = useState("00:00");

    function getTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        let hoursPattern = `${hours}`;
        let minutesPattern = `${minutes}`;
        if (minutes < 10) {
            minutesPattern = `0${minutes}`;
        }
        if (hours < 10) {
            hoursPattern = `0${minutes}`;
        }
        let fullPattern = `${hoursPattern}:${minutesPattern}`

        return fullPattern;
    }

    useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 3000);
        return () => {};
    }, []);
    return (
        <div className={styles["clock"]}>
            <strong>{time}</strong>
        </div>
    );
};
