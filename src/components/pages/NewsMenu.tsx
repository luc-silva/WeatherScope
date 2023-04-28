import { news } from "../../constants/defaultData";
import { NewsCard } from "../cards/NewsCard";
import styles from "./NewsMenu.module.css";

export const NewsMenu = () => {
    return (
        <section className={styles["news"]}>
            <div className={styles["news__title"]}>
                <h2>News</h2>
                <p>See what's happening arround the world!</p>
            </div>
            <div className={styles["news__container"]}>
                {news.map((news: INews) => {
                    return <NewsCard news={news} />;
                })}
            </div>
        </section>
    );
};
