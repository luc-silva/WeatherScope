import styles from "./SettingsMenu.module.css"

export const SettingsMenu = () => {
    return (
        <div className={styles["settings-container"]}>
            <h2>Settings</h2>
            <div>
                default city
                <input type="text" />
            </div>
            <div>
                unit
                <select>
                    <option value="">metric</option>
                    <option value="">imperial</option>
                </select>
            </div>
            <button>Submit Changes</button>
        </div>
    );
};
