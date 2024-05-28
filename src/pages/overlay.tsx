import React from 'react';
import styles from "../styles/overlay.module.css"

const Overlay = () => {
    return <div className={styles.wrapper}>
        <div className={styles.message}>SomeMessage</div>
    </div>
};

export default Overlay;
