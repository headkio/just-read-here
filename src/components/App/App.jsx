import { useEffect, useState } from "react";
import ContentList from "../ContentList/ContentList";
import SettingBar from "../SettingBar/SettingBar";
import styles from "./App.module.css";

function App({ youtubeApi }) {
  const [youtubes, setYoutubes] = useState([]);

  const keywords = [
    {
      id: 1,
      name: "프론트엔드",
    },
    {
      id: 2,
      name: "백엔드",
    },
    {
      id: 3,
      name: "개발자",
    },
    {
      id: 4,
      name: "bts",
    },
  ];

  const query = keywords
    .map((category) => category.name) //
    .join("|");

  useEffect(() => {
    youtubeApi
      .search(query) //
      .then((youtubes) => setYoutubes(youtubes));
  }, [youtubeApi, query]);

  return (
    <div className={styles.container}>
      <SettingBar keywords={keywords} />
      <ContentList youtubes={youtubes} />
    </div>
  );
}

export default App;
