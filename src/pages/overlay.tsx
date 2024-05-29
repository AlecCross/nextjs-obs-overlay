//pages/overlay.tsx

import React from 'react';
import styles from "../styles/overlay.module.css"
import SubscriberCount from '../components/SubscriberCount';

const Overlay = () => {
    return <div className={styles.wrapper}>
        <SubscriberCount />
        <div className={styles.message}>SomeMessage</div>
    </div>
};

export default Overlay;
