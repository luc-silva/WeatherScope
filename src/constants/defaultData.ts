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
    scale: "celsius"
};

export const initialWeatherStatus: WeatherStatus = {
    id: "",
    main: "",
    description: "",
    icon: "",
};

export const initialWeatherData: IWeatherData = {
    main: {},
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
