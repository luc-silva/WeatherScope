import { useState } from "react";
import { WeatherCard } from "../cards/WeatherCard";

import styles from "./WeatherMenu.module.css";

export const WeatherMenu = ({ user }: { user: IUser }) => {
    let [searchCardActive, toggleSearchCard] = useState(false);

    return (
        <section className={styles["weather-menu"]}>
            {searchCardActive && (
                <div className={styles["weather-menu__search-result"]}>
                    {/* <SearchedCityCard  /> */}
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
