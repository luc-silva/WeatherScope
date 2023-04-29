import { NavLink } from "react-router-dom";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
    function setClass(prop: { isActive: boolean }) {
        return prop.isActive
            ? [styles["link-item"], styles["item--active"]].join(" ")
            : styles["link-item"];
    }

    return (
        <div className={styles["header"]}>
            <nav className={styles["header__navigation"]}>
                <ul className={styles["header__navigation__links"]}>
                    <li>
                        <NavLink to="/weather" className={setClass}>
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={setClass}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/agenda" className={setClass}>
                            Agenda
                        </NavLink>
                    </li>
                </ul>
                <div className={styles["header__navigation__extras"]}>
                    <div className={styles["settings-button"]}>
                        <NavLink to="/settings" className={setClass}>
                            Settings
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};
