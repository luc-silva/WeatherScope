import axios from "axios";

class WeatherService {
    private API_KEY = "APPID=67556afc5b803ebc6540b49ddb13c6a3";
    private API_URL = `https://api.openweathermap.org/data/2.5/weather?${this.API_KEY}`;
    private UNIT_PARAM = "&units=";
    private CITY_PARAM = "&q=";

    public async getWeatherStatusFromCity(city: string) {
        return await axios
            .get(this.API_URL + this.CITY_PARAM + city)
            .then(({ data }) => {
                return data;
            });
    }
}

export default new WeatherService();
