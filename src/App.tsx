import "./App.css";
import { AppNavigator } from "./components/AppNavigator";
import { SettingsMenu } from "./components/SettingsMenu";
import { WeatherMenu } from "./components/WeatherMenu";

function App() {
    return (
        <div className="App">
            <div className={"weather-app-image"}>
                <span className={"weather-tip"}>
                    Click above the temperature to change its format
                </span>
                <span className={"weather-display"}>
                    <div className={"weather-city"}>----</div>
                    <div className={"weather-status-display"}>
                        <div className={"weather-status"}>----</div>
                        <div className={"weather-temperature"}>N/A°C</div>
                    </div>
                </span>
            </div>   
			{/* <AppNavigator />
			<SettingsMenu />
			<WeatherMenu />          */}
        </div>
    );
}

export default App;
