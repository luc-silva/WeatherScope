import styles from "./AppHeader.module.css";

export const AppHeader = () => {
    return (
        <header className={styles["weather-app-header"]}>
            <nav className={styles["weather-app-navigator"]}>
                <ul>
                    <li className={styles["weather-tab-btn"]}>Weather</li>
                    <li>News</li>
                    <li>Agenda</li>
                </ul>
                <button className={styles["settings-button"]}>Settings</button>
            </nav>
                {/* add search bar here */}
        </header>
    );
};
