import React from "react";
import styles from "./ChannelList.module.css";

const ChannelList = ({ channels }) => (
  <ul>
    {channels.map((channel) => (
      <li key={channel.id} className={styles.channelList}>
        {channel.name}
      </li>
    ))}
  </ul>
);

export default ChannelList;
