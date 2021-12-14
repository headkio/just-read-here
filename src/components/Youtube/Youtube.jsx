import React from 'react';
import styles from './Youtube.module.css';

const Youtube = ({youtube}) => (
    <div className={styles.youtube}>{youtube.snippet.title}</div>
);

export default Youtube;