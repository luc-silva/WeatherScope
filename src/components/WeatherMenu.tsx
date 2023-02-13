import styles from "./WeatherMenu.module.css"

export const WeatherMenu = () => {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["weather-city-container-card"]}>
                <div className={styles["weather-city-container-info"]}>
                    <div>
                        <div>
                            <h2>London - GB</h2>
                            <p>Clear Skies</p>
                        </div>
                    </div>
                    <div className={styles["weather-city-container-stts"]}>
                        <span>
                            <strong>HumclassNameity:</strong>
                            31231
                        </span>

                        <span>
                            <strong>Temp Min:</strong>
                            13312
                        </span>
                        <span>
                            <strong>Temp Max:</strong>
                            asdas
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles["weather-card-container"]}>
                
            </div>
        </div>
    );
};
