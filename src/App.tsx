import "./App.css";

function App() {
    return (
        <div className="App">
            <div id="weather-app-image">
                <span id="weather-tip">
                    Click above the temperature to change its format
                </span>
                <span id="weather-display">
                    <div id="weather-city">----</div>
                    <div id="weather-status-display">
                        <div id="weather-status">----</div>
                        <div id="weather-temperature">N/A°C</div>
                    </div>
                </span>
            </div>            
        </div>
    );
}

export default App;
