import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SettingsMenu.module.css";
import { SettingsForm } from "../forms/SettingsForm";
import { UserSelectedCities } from "../misc/UserSelectedCities";
import { useNavigate } from "react-router-dom";

export const SettingsMenu = ({
    user,
    setUser,
}: {
    user: IUser;
    setUser: Function;
}) => {
    let [form, setForm] = useState(user);
    let navigate = useNavigate()

    function handleChange(event: ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLSelectElement
        ) {
            setForm({ ...user, [target.name]: target.value });
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setUser(form);
        navigate("/weather")
    }
    return (
        <section className={styles["settings"]}>
            <div className={styles["settings__title"]}>
                <h2>Settings</h2>
            </div>
            <div className={styles["settings__main"]}>
                <div className={styles["settings__form__container"]}>
                    <SettingsForm
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        form={form}
                    />
                </div>
                <div className={styles["settings__cities__container"]}>
                    <UserSelectedCities setUser={setUser} user={user}/>
                </div>
            </div>
        </section>
    );
};
