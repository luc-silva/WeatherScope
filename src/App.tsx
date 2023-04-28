import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { MainDisplay } from "./components/misc/MainDisplay";

import styles from "./App.module.css";
import { WeatherMenu } from "./components/WeatherMenu";
import { SettingsMenu } from "./components/SettingsMenu";
import { defaultUserSettings } from "./constants/defaultData";

function App() {
    let [weatherData, setWeatherData] = useState({});
    let [user, setUser] = useState(defaultUserSettings)

    /* useEffect(() => {
        //let data = getData();
        //setWeatherData(data);
    }, [weatherData]); */

    return (
        <main className={styles["WeatherApp"]}>
            <section className={styles["weather-app__display"]}>
                <MainDisplay city={user.mainCity} user={user}/>
            </section>
            <Router>
                <header className={styles["weather-app__header"]}>
                    <AppHeader />
                </header>
                <div className={styles["weather-app__panels"]}>
                    <Routes>
                        <Route path="weather" element={<WeatherMenu user={user} />} />
                        <Route path="settings" element={<SettingsMenu user={user}  />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
