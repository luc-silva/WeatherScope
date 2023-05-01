import { format } from "date-fns";
import styles from "./TaskCard.module.css";
import { Check, Trash } from "phosphor-react";
import { EventHandler } from "react";

export const TaskCard = ({
    taskDetails,
    remove,
    changeStatus,
}: {
    taskDetails: ITask;
    remove: React.MouseEventHandler<HTMLDivElement>;
    changeStatus: React.MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div className={styles["task-card"]}>
            <div className={styles["task-card__main"]}>
                <div
                    className={styles["task__checkbox"]}
                    onClick={changeStatus}
                >
                    {taskDetails.concluded && <Check />}
                </div>
                <h3>{taskDetails.task}</h3>
            </div>
            <div className={styles["task-card__details"]}>
                <div className={styles["details__time"]}>
                    {format(new Date(taskDetails.end_date), "dd/MM/yyyy")}
                </div>
                <div className={styles["details__icons"]}>
                    <div className={styles["discart-btn"]} onClick={remove}>
                        <Trash size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};
