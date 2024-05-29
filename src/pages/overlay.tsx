//pages/overlay.tsx

import React from 'react';
import styles from "../styles/overlay.module.css"
import UserChannels from '../components/UserChannels';

const Overlay = () => {
    return <div className={styles.wrapper}>
        <UserChannels/>
        <div className={styles.message}>SomeMessage</div>
    </div>
};

export default Overlay;
