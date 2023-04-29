import { FormEvent, useState } from "react";
import { TaskCard } from "../cards/TaskCard";
import { AgendaForm } from "../forms/AgendaForm";
import styles from "./AgendaMenu.module.css";

export const AgendaMenu = ({
    user,
    setUser,
}: {
    user: IUser;
    setUser: Function;
}) => {
    let [form, setForm] = useState({
        task: "",
        end_date: new Date().getMilliseconds(),
    });

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setUser(() => {
            return {
                ...user,
                tasks: [...user.tasks, { ...form, concluded: false }],
            };
        });
    }

    function removeItem(index: number) {
        let remainingTasks = user.tasks.filter(
            (item, innerIndex) => index !== innerIndex
        );

        setUser({ ...user, tasks: [...remainingTasks] });
    }

    function changeTaskStatus(index: number) {
        let tasks = user.tasks.map((item, innerIndex) =>
            innerIndex === index ? { ...item, concluded: !item.concluded } : item
        );

        setUser({ ...user, tasks: [...tasks] });
    }

    return (
        <section className={styles["agenda"]}>
            <div className={styles["agenda__title"]}>
                <h2>Agenda</h2>
                <p>Take note about everything you have to do!</p>
            </div>
            <div className={styles["agenda__main"]}>
                <div className={styles["agenda__form__container"]}>
                    <AgendaForm
                        onSubmit={handleSubmit}
                        form={form}
                        setForm={setForm}
                    />
                </div>
                <div className={styles["agenda__task__container"]}>
                    {user.tasks.map((task: ITask, index: number) => {
                        return (
                            <TaskCard
                                taskDetails={task}
                                key={index}
                                changeStatus={() => {
                                    changeTaskStatus(index);
                                }}
                                remove={() => {
                                    removeItem(index);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
