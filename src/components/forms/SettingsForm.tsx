import { ChangeEvent, EventHandler, FormEvent } from "react";
import styles from "./SettingsForm.module.css";

export const SettingsForm = ({
    onChange,
    onSubmit,
    form,
}: {
    onSubmit: EventHandler<FormEvent>;
    onChange: EventHandler<ChangeEvent>;
    form: any;
}) => {
    return (
        <form
            action="POST"
            className={styles["settings__form"]}
            onSubmit={onSubmit}
        >
            <div className={styles["input-container"]}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                />
            </div>
            <div className={styles["input-container"]}>
                <label htmlFor="main__city">Default City</label>
                <input
                    type="text"
                    name="main__city"
                    value={form.main__city}
                    onChange={onChange}
                />
            </div>
            <div className={styles["input-container"]}>
                <label htmlFor="scale">Scale</label>
                <select name="scale" value={form.scale} onChange={onChange}>
                    <option value="metric">metric</option>
                    <option value="imperial">imperial</option>
                </select>
            </div>
            <div className={styles["input-container"]}>
                <input type="submit" value="Submit Changes" />
            </div>
        </form>
    );
};
