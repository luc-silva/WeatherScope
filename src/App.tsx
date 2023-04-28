import { useState, useEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { MainDisplay } from "./components/misc/MainDisplay";

import styles from "./App.module.css";

function App() {
    let [weatherData, setWeatherData] = useState({});

    /* useEffect(() => {
        //let data = getData();
        //setWeatherData(data);
    }, [weatherData]); */

    async function getData(city = "London", unit = "metric") {
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${unit}`
            );
            return await response.json();
        } catch (error) {
            throw new Error(`Wasn't possible to fetch data from API. ${error}`);
        }
    }

    return (
        <main className={styles["WeatherApp"]}>
            <section className={styles["weather-app__display"]}>
                <MainDisplay />
            </section>
            <header className={styles["weather-app__header"]}>
                <AppHeader />
            </header>
            <section>

            </section>
        </main>
    );
}

export default App;
