import React from "react";
import Youtube from "../Youtube/Youtube";
import styles from "./ContentList.module.css";

const ContentList = ({ youtubes }) => {
  return (
    <ul className={styles.contentList}>
      {youtubes.map((youtube) => (
        <Youtube key={youtube.id.videoId} youtube={youtube} />
      ))}
    </ul>
  );
};

export default ContentList;
