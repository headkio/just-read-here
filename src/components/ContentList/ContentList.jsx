import React from "react";
import Youtube from "../Youtube/Youtube";
import styles from "./ContentList.module.css";

const ContentList = ({ youtubes }) => {
  return (
    <ul className={styles.contentList}>
      {youtubes.map((youtube) => (
        <li key={youtube.id.videoId} className={styles.contentItem}>
          <Youtube youtube={youtube} />
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
