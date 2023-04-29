import styles from "./WeatherCardErrorOverlay.module.css"

export const WeatherCardErrorOverlay = () => {
    return (
        <div className={styles["error-overlay"]}>
            <h3>Error:</h3>
            <p>The location you entered could not be found.</p>
        </div>
    )
}