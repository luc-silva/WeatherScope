import styles from "./NewsCard.module.css";

export const NewsCard = ({ news }: { news: INews }) => {
    return (
        <div className={styles["news-card"]}>
            <div className={styles["news-card__main"]}>
                <h3>{news.title}</h3>
                <em></em>
            </div>
            <div className={styles["news-card__body"]}>{news.description}</div>
        </div>
    );
};
