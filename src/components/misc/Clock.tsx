import { useEffect, useState } from "react";
import styles from "./Clock.module.css";
import { formatTime } from "../../utils/tools";

export const Clock = () => {
    let [time, setTime] = useState("00:00");

    function getTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        return `${formatTime(hours)}:${formatTime(minutes)}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles["clock"]}>
            <strong>{time}</strong>
        </div>
    );
};
