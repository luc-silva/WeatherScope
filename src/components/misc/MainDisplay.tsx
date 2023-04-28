import { DisplayInfo } from "./DisplayInfo";

import image from "../../img/clear.jpg"
import styles from "./MainDisplay.module.css";

export const MainDisplay = () => {

    return (
        <div className={styles["main-display"]}>
            <span className={styles["main-display__tip"]}>
                Click above the temperature to change its format
            </span>
            <div className={styles["main-display__image"]}>
                <img src={image} />
            </div>
            <div className={styles["main-display__info"]}>
               <DisplayInfo />
            </div>
        </div>
    );
};
