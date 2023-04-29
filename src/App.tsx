import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AppHeader } from "./components/AppHeader";
import { MainDisplay } from "./components/misc/MainDisplay";
import { WeatherMenu } from "./components/pages/WeatherMenu";
import { SettingsMenu } from "./components/pages/SettingsMenu";
import { defaultUserSettings } from "./constants/defaultData";
import { NewsMenu } from "./components/pages/NewsMenu";
import { AgendaMenu } from "./components/pages/AgendaMenu";

import styles from "./App.module.css";

function App() {
    let [user, setUser] = useState(() => {
        const cachedUser = localStorage.getItem("user");
        return cachedUser ? JSON.parse(cachedUser) : defaultUserSettings;
    });
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

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
                            element={
                                <AgendaMenu user={user} setUser={setUser} />
                            }
                        />
                        <Route path="news" element={<NewsMenu />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
