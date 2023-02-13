export const WeatherMenuCard = () => {
    return (
        <div className="weather-card">
            <span className="weather-card-city"></span>
            <div className="weather-card-status-container">
                <div className="weather-card-status">
                    <span>12F</span>
                    <span>24C</span>
                </div>
            </div>
            <div className="weather-card-condition">Clear Sky *logo*</div>
        </div>
    );
};
