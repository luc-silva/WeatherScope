import { SearchForm } from "../forms/SearchForm";
import { Clock } from "./Clock";
import styles from "./WeatherMenuHeader.module.css";

export const WeatherMenuHeader = () => {
    return (
        <div className={styles["menu-header"]}>
            <div className={styles["menu-header__search-box"]}>
                <SearchForm />
            </div>
            <div className={styles["menu-header__clock"]}>
                <Clock />
            </div>
        </div>
    );
};
