export const WeatherMenu = () => {
    return (
        <div id="main-container">
            <div id="clock-search-container">
                <div id="search-container">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="type a city here"
                    />
                    <button id="serach-btn">Search</button>
                </div>
                <div>
                    <strong id="weather-clock">13:13</strong>
                </div>
            </div>
            <div id="weather-card-container">
                
            </div>
        </div>
    );
};
