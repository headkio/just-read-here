import React from "react";
import styles from "./Youtube.module.css";

const Youtube = ({ youtube }) => {
  return (
    <div className={styles.container}>
      <iframe
        id="player"
        type="text/html"
        src={`http://www.youtube.com/embed/${youtube.id.videoId}`}
        frameBorder="0"
        className={styles.player}
      ></iframe>
      <div className={styles.info}>
        <p className={styles.title}>{youtube.snippet.title}</p>
        <p className={styles.description}>{youtube.snippet.description}</p>
        <p className={styles.channelTitle}>{youtube.snippet.channelTitle}</p>
        <p className={styles.publishTime}>{youtube.snippet.publishTime}</p>
      </div>
    </div>
  );
};

export default Youtube;
