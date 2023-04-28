import { useState } from "react";
import { WeatherCard } from "../cards/WeatherCard";

import styles from "./WeatherMenu.module.css";
import { SearchedCityCard } from "../cards/SearchedCityCard";
import { WeatherMenuHeader } from "../misc/WeatherMenuHeader";

export const WeatherMenu = ({ user }: { user: IUser }) => {
    let [searchCardActive, toggleSearchCard] = useState(false);

    return (
        <section className={styles["weather-menu"]}>
            <div className={styles["weather-menu__header"]}>
                <WeatherMenuHeader />
            </div>
            {searchCardActive && (
                <div className={styles["weather-menu__search-result"]}>
                    <SearchedCityCard city="" scale="" />
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
