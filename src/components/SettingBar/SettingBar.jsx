import React from "react";
import styles from "./SettingBar.module.css";

const SettingBar = ({ keywords }) => (
  <div className={styles.settingbar}>
    {keywords.map((keyword) => (
      <span key={keyword.id} className={styles.keyword}>
        {keyword.name}
      </span>
    ))}
    <i className={`fas fa-plus ${styles.addBtn}`}></i>
  </div>
);

export default SettingBar;
