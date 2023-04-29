import { useEffect, useState } from "react";
import styles from "./MainDisplayImage.module.css";

//images
import clear from "../../img/clear.jpg";
import cloudy from "../../img/cloudy.jpg";
import dizzle from "../../img/drizzle.jpg";
import raining from "../../img/raining.jpg";
import snow from "../../img/snow.jpg";
import thunderstorm from "../../img/thunderstorm.jpg";
import mist from "../../img/mist.jpg";

const weatherStatuses: { [key: string]: string } = {
    Rain: raining,
    Thunderstorm: thunderstorm,
    Clouds: cloudy,
    Snow: snow,
    Dizzle: dizzle,
    Clear: clear,
    Mist: mist,
};

export const MainDisplayImage = ({
    weatherStatus,
}: {
    weatherStatus: string;
}) => {
    let [currentImage, setCurrentImage] = useState(weatherStatuses.Clear);

    useEffect(() => {
        if (weatherStatus) {
            setCurrentImage(weatherStatuses[weatherStatus]);
        }
    }, [weatherStatus]);
    return (
        <>
            <img src={currentImage} className={styles["background-image"]} />
        </>
    );
};
