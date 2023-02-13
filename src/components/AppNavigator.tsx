import styles from "./AppNavigator.module.css"

export const AppNavigator = () => {
    return (
        <div>
            <nav className={styles["weather-app-navigator"]}>
                <ul>
                    <li className={styles["weather-tab-btn"]}>Weather</li>
                    <li>News</li>
                    <li>Agenda</li>
                </ul>
                <button className={styles["settings-button"]}>Settings</button>
                {/* add search bar here */}
            </nav>
            
        </div>
    );
};
