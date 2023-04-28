import { NavLink } from "react-router-dom";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
    return (
        <div className={styles["header"]}>
            <nav className={styles["header__navigation"]}>
                <ul className={styles["header__navigation__links"]}>
                    <li>
                        <NavLink to="weather">Weather</NavLink>
                    </li>
                    <li>
                        <NavLink to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="agenda">Agenda</NavLink>
                    </li>
                </ul>
                <div className={styles["header__navigation__extras"]}>
                    <div className={styles["settings-button"]}>
                        <NavLink to="settings">Settings</NavLink>
                    </div>
                </div>
            </nav>
            {/* add search bar here */}
        </div>
    );
};
