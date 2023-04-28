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
    main__city: "London",
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

export const news: INews[] = [
    {
        title: "Alien Invasion Averted After Aliens Get Lost on the Way to Earth!",
        description:
            "In a bizarre turn of events, an alien invasion of Earth was averted after the alien spacecraft carrying the would-be invaders got lost on the way to our planet. According to the alien spokesperson, they were following a map that was over 10,000 years old and didn't account for the changes in the galaxy's layout.",
        createdAt: new Date("2022-07-15T13:45:00.000Z"),
    },
    {
        title: "World Record Set for Longest Cat Nap, Cat Still Sleeping!",
        description:
            "In a stunning display of feline fortitude, a domestic house cat has set a new world record for the longest uninterrupted nap, clocking in at 22 hours and counting. The cat's owner reports that despite attempts to wake the cat, it remains sound asleep.",
        createdAt: new Date("2023-01-01T12:00:00.000Z"),
    },
    {
        title: "Local Man Wins Award for Best Impersonation of a Tree",
        description:
            "In a surprise upset, a local man has won the coveted 'Best Impersonation of a Tree' award at the annual talent show. Judges were impressed with his ability to remain motionless for hours on end, as well as his convincing bark-like appearance.",
        createdAt: new Date("2023-04-01T08:00:00.000Z"),
    },
    {
        title: "Scientist Discovers the Meaning of Life, Forgets to Write it Down",
        description:
            "In a groundbreaking discovery, a scientist claims to have finally uncovered the meaning of life. However, in the excitement of the moment, they forgot to write down the answer and cannot remember it. They are currently trying to retrace their thought process to uncover the answer once more.",
        createdAt: new Date("2022-11-11T16:30:00.000Z"),
    },
    {
        title: "Local Dog Catches Frisbee in Mid-Air, Immediately Retires",
        description:
            "In a heartwarming display of canine athleticism, a local dog has caught a frisbee in mid-air for the first time in its life. Overwhelmed by the moment, the dog immediately retired from frisbee-catching and is now living a peaceful life of napping and belly rubs.",
        createdAt: new Date("2023-03-15T09:15:00.000Z"),
    },
];
