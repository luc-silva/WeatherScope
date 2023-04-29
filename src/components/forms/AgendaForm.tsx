import { ChangeEvent, EventHandler, FormEvent, useState } from "react";
import styles from "./AgendaForm.module.css";

export const AgendaForm = ({
    onSubmit,
    setForm,
    form,
}: {
    onSubmit: EventHandler<FormEvent>;
    setForm: Function;
    form: any;
}) => {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target) {
            setForm({ ...form, [target.name]: target.value });
        }
    }
    return (
        <form
            action="POST"
            onSubmit={onSubmit}
            className={styles["agenda-form"]}
        >
            <div className={styles["agenda-form__main"]}>
                <div className={styles["input__container"]}>
                    <label htmlFor="task">Task: </label>
                    <input
                        type="text"
                        name="task"
                        value={form.task}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles["input__container"]}>
                    <label htmlFor="end_date">Until: </label>
                    <input
                        type="date"
                        name="end_date"
                        min={new Date().toLocaleString("en-us")}
                        value={form.end_date}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className={styles["submit-btn"]}>
                <input type="submit" value="Create note" />
            </div>
        </form>
    );
};
