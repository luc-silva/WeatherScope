import { ChangeEvent, EventHandler, FormEvent, useState } from "react";
import styles from "./SearchForm.module.css";

export const SearchForm = ({ 
    setSearchKeyword,
    toggleCard
}: {
    setSearchKeyword:Function
    toggleCard:Function
}) => {
    function handleSubmit(event:FormEvent){
            event.preventDefault()

            toggleCard(true)
        setSearchKeyword(city)
    }
    let [city, setCity] = useState("");
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target) {
            setCity(target.value);
        }
    }


    return (
        <form
            action="POST"
            className={styles["search-form"]}
            onSubmit={handleSubmit}
        >
            <input type="text" onChange={handleChange} value={city}/>
            <input type="submit" value="Search" />
        </form>
    );
};
