import styles from "./AppHeader.module.css";

export const AppHeader = () => {
    return (
        <div className={styles["header"]}>
            <nav className={styles["header__navigation"]}>
                <ul className={styles["header__navigation__links"]}>
                    <li>Weather</li>
                    <li>News</li>
                    <li>Agenda</li>
                </ul>
                <div className={styles["header__navigation__extras"]}>
                    <button className={styles["settings-button"]}>
                        Settings
                    </button>
                </div>
            </nav>
            {/* add search bar here */}
        </div>
    );
};
