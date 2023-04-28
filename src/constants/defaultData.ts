export const defaultCities = [
    "São Paulo",
    "Washington",
    "Tokyo",
    "New Mexico",
    "Chernobyl",
];

export const defaultUserSettings: IUser = {
    username: "user",
    cities: defaultCities,
    mainCity: "London",
    scale: "celsius",
};

export const initialWeatherStatus: WeatherStatus = {
    id: "",
    main: "",
    description: "",
    icon: "",
};

export const initialWeatherData: IWeatherData = {
    main: {
        feels_like: 0,
        humidity: 0,
        temp: 0,
        temp_min: 0,
        temp_max: 0,
    },
    name: "",
    weather: [initialWeatherStatus],
    sys: {
        type: "",
        id: "",
        country: "",
    },
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
};
