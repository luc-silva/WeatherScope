import { X } from "phosphor-react";
import styles from "./SelectedCityCard.module.css";

export const SelectedCityCard = ({
    city,
    deleteCard,
}: {
    city: string;
    deleteCard: React.MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card__title"]}>{city}</div>
            <div className={styles["card__btn"]} onClick={deleteCard}>
                <X size={15} />
            </div>
        </div>
    );
};
