import styles from "./AgendaMenu.module.css";

export const AgendaMenu = ({ user }: { user: IUser }) => {
    return (
        <section className={styles["agenda"]}>
            <div className={styles["agenda__title"]}>
                <h2>Agenda</h2>
                <p>Take note about everything you have to do!</p>
            </div>
            <div className={styles["agenda__task__container"]}></div>
        </section>
    );
};
