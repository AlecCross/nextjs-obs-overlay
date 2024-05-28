// pages/overlay2.js
import React from 'react';
import Overlay from './overlay'; // Імпортуємо компонент Overlay
import styles from "../styles/overlay2.module.css"; // Імпортуємо стилі

const Overlay2 = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Overlay /> {/* Рендеримо компонент Overlay */}
                <h2 className={styles.h2}>Video Title</h2>
                <p className={styles.p}>Description of the video...</p>
            </div>
        </div>
    );
};

export default Overlay2;
