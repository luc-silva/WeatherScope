import { ChangeEvent, EventHandler, FormEvent } from "react";
import styles from "./SelectedCitiesForm.module.css";

export const SelectedCityForm = ({
    onSubmit,
    value,
    setValue,
}: {
    onSubmit: EventHandler<FormEvent>;
    value: string;
    setValue: Function;
}) => {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target) {
            setValue(target.value);
        }
    }

    return (
        <form
            action="POST"
            className={styles["selected-city-form"]}
            onSubmit={onSubmit}
        >
            <div className={styles["input-container"]}>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Chernobyl"
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div className={styles["input-container"]}>
                <input type="submit" value="Add" />
            </div>
        </form>
    );
};
