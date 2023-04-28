import { ChangeEvent, useState } from "react";
import styles from "./SearchForm.module.css";

export const SearchForm = ({}: {}) => {
    let [city, setCity] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target) {
            setCity(target.value);
        }
    }
    return (
        <form action="POST" className={styles["search-form"]}>
            <input type="text" onChange={handleChange} />
            <input type="submit" value="Search" />
        </form>
    );
};
