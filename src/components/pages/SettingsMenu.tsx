import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SettingsMenu.module.css";
import { defaultUserSettings } from "../../constants/defaultData";

export const SettingsMenu = ({
    user,
    setUser,
}: {
    user: IUser;
    setUser: Function;
}) => {
    let [form, setForm] = useState(user);

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
    }
    return (
        <section className={styles["settings"]}>
            <div className={styles["settings__title"]}>
                <h2>Settings</h2>
            </div>
            <div className={styles["settings__form__container"]}>
                <form
                    action="POST"
                    className={styles["settings__form"]}
                    onSubmit={handleSubmit}
                >
                    <div className={styles["input-container"]}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="main-city"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="main__city">Default City</label>
                        <input
                            type="text"
                            name="main__city"
                            value={form.main__city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="scale">Scale</label>
                        <select
                            name="scale"
                            value={form.scale}
                            onChange={handleChange}
                        >
                            <option value="metric">metric</option>
                            <option value="imperial">imperial</option>
                        </select>
                    </div>
                    <div className={styles["input-container"]}>
                        <input type="submit" value="Submit Changes" />
                    </div>
                </form>
            </div>
        </section>
    );
};
