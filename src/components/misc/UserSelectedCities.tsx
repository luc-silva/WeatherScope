import { FormEvent, useState } from "react";
import { SelectedCityCard } from "../cards/SelectedCityCard";
import { SelectedCityForm } from "../forms/SelectedCitiesForm";
import styles from "./UserSelectedCities.module.css";

export const UserSelectedCities = ({
    user,
    setUser,
}: {
    user: IUser;
    setUser: Function;
}) => {
    let [location, setLocation] = useState("")

    function handleSubmit(event:FormEvent){
        event.preventDefault()

        if(user.cities.length < 10){
            setUser({...user, cities:[...user.cities, location]})
        }
    }

    function deleteItem(index: number) {
        let remainingCities = user.cities.filter(
            (item, innerIndex) => innerIndex !== index
        );
        setUser({ ...user, cities: remainingCities });
    }
    return (
        <>
            <div className={styles["selected-cities__title"]}>
                <h3>Locations</h3>
                <p>
                    Insert locations that you want to be show on weather menu. Max
                    10.
                </p>
            </div>
            <div className={styles["selected-cities__form"]}>
                <SelectedCityForm onSubmit={handleSubmit} value={location} setValue={setLocation}/>
            </div>
            <div className={styles["selected-cities__container"]}>
                {user.cities.map((item, index) => {
                    return (
                        <SelectedCityCard
                            city={item}
                            deleteCard={() => {
                                deleteItem(index);
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};
