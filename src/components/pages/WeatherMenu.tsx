import { useState } from "react";
import { WeatherCard } from "../cards/WeatherCard";

import { SearchedCityCard } from "../cards/SearchedCityCard";
import { WeatherMenuHeader } from "../misc/WeatherMenuHeader";

import styles from "./WeatherMenu.module.css";

export const WeatherMenu = ({ user }: { user: IUser }) => {
    let [searchCardActive, toggleSearchCard] = useState(false);
    let [searchKeyword, setSearchKeyword] = useState("");

    return (
        <section className={styles["weather-menu"]}>
            <div className={styles["weather-menu__header"]}>
                <WeatherMenuHeader
                    setSearchkeyword={setSearchKeyword}
                    toggleCard={toggleSearchCard}
                />
            </div>
            {searchCardActive && (
                <div className={styles["weather-menu__search-result"]}>
                    <SearchedCityCard
                        city={searchKeyword}
                        toggle={toggleSearchCard}
                    />
                </div>
            )}
            <div className={styles["weather-menu__container"]}>
                {user.cities.map((city: string, index: React.Key) => {
                    return <WeatherCard city={city} key={index} />;
                })}
            </div>
        </section>
    );
};
