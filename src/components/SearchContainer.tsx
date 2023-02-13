import styles from "./SearchContainer.module.css"

export const SearchContainer = () => {
    return (
        <div className={styles["clock-search-container"]}>
            <div className={styles["search-container"]}>
                <input
                    className={styles["search-input"]}
                    type="text"
                    placeholder="type a city here"
                />
                <button className={styles["serach-btn"]}>Search</button>
            </div>
            <div>
                <strong className={styles["weather-clock"]}>13:13</strong>
            </div>
        </div>
    );
};
