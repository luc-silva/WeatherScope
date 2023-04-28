import { SearchForm } from "../forms/SearchForm";
import { Clock } from "./Clock";
import styles from "./WeatherMenuHeader.module.css";

export const WeatherMenuHeader = ({
    setSearchkeyword,
    toggleCard,
}: {
    setSearchkeyword: Function;
    toggleCard: Function;
}) => {
    return (
        <div className={styles["menu-header"]}>
            <div className={styles["menu-header__search-box"]}>
                <SearchForm setSearchKeyword={setSearchkeyword} toggleCard={toggleCard}/>
            </div>
            <div className={styles["menu-header__clock"]}>
                <Clock />
            </div>
        </div>
    );
};
