import styles from "./SearchedCityCardErrorOverlay.module.css"

export const SearchedCityCardErrorOverlay = () => {
    return (
        <div className={styles["error-overlay"]}>
            <h3>Error</h3>
            <p>
                Sorry, we could not find the weather for the location you
                entered. Please try again with a different location.
            </p>
        </div>
    );
};
