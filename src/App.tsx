import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { MainDisplay } from "./components/misc/MainDisplay";

import styles from "./App.module.css";
import { WeatherMenu } from "./components/pages/WeatherMenu";
import { SettingsMenu } from "./components/pages/SettingsMenu";
import { defaultUserSettings } from "./constants/defaultData";
import { NewsMenu } from "./components/pages/NewsMenu";
import { AgendaMenu } from "./components/pages/AgendaMenu";

function App() {
    let [weatherData, setWeatherData] = useState({});
    let [user, setUser] = useState(defaultUserSettings);

    /* useEffect(() => {
        //let data = getData();
        //setWeatherData(data);
    }, [weatherData]); */

    return (
        <main className={styles["WeatherApp"]}>
            <section className={styles["weather-app__display"]}>
                <MainDisplay city={user.main__city} user={user} />
            </section>
            <Router>
                <header className={styles["weather-app__header"]}>
                    <AppHeader />
                </header>
                <div className={styles["weather-app__panels"]}>
                    <Routes>
                        <Route
                            path="weather"
                            element={<WeatherMenu user={user} />}
                        />
                        <Route
                            path="settings"
                            element={
                                <SettingsMenu user={user} setUser={setUser} />
                            }
                        />
                        <Route
                            path="agenda"
                            element={<AgendaMenu user={user} setUser={setUser}/>}
                        />
                        <Route path="news" element={<NewsMenu />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
