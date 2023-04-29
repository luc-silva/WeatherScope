declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

interface IUser {
    username: string;
    cities: string[];
    main__city: string;
    scale: string;
    tasks: ITask[];
}

interface WeatherStatus {
    id: string;
    main: string;
    description: string;
    icon: string;
}

interface IWeatherData {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    name: string;
    weather: WeatherStatus[];
    sys: {
        type: string;
        id: string;
        country: string;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
}

interface ITask {
    concluded: boolean;
    end_date: Date;
    task: string;
}

interface INews {
    title: string;
    createdAt: Date;
    description: string;
}
