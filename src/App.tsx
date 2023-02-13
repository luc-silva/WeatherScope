import "./App.css";
import { useState, useEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { SettingsMenu } from "./components/SettingsMenu";
import { WeatherMenu } from "./components/WeatherMenu";

function App() {
    let image = require("./img/clear.jpg");
    let [actualTemperature, setActualTemperature] = useState(40);
    let [isCelsius, toggleUnit] = useState(true);
    

    useEffect(() => {
        if (isCelsius) {
            let celsius = (actualTemperature - 32) * (5 / 9);
            setActualTemperature(celsius);
        } else {
            let fahrenheit = actualTemperature * (9 / 5) + 32;
            setActualTemperature(fahrenheit);
        }
    }, [isCelsius]);

    return (
        <div className="WeatherApp">
            <div className={"weather-app-main-display"}>
                <span className={"display-tip"}>
                    Click above the temperature to change its format
                </span>
                <div className={"display-image"}>
                    <img src={image} />
                </div>
                <div className={"display-info"}>
                    <div className={"weather-city"}>London</div>
                    <div className={"weather-status-display"}>
                        <div className={"weather-status"}>Clear Skies</div>
                        <div
                            className={"weather-temperature"}
                            onClick={() => {
                                toggleUnit(!isCelsius);
                            }}
                        >
                            {(isCelsius &&
                                `${actualTemperature.toFixed(2)} C`) ||
                                `${actualTemperature.toFixed(2)} F`}
                        </div>
                    </div>
                </div>
            </div>
            <AppHeader />
            {/*<SettingsMenu />
			<WeatherMenu />          */}
        </div>
    );
}

export default App;
