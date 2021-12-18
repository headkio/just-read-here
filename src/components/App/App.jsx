import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import ContentList from "../ContentList/ContentList";
import ChannelList from "../ChannelList/ChannelList";
import styles from "./App.module.css";

function App({ youtubeApi }) {
  const [youtubes, setYoutubes] = useState([]);

  const categories = [
    {
      id: 1,
      name: "IT",
    },
    {
      id: 2,
      name: "Game",
    },
  ];

  const channels = [
    {
      id: 1,
      name: "Youtube",
    },
    {
      id: 2,
      name: "Facebook",
    },
  ];

  const query = "프론트엔드|백엔드|개발자";

  useEffect(() => {
    // youtubeApi.getMostPopular().then((youtubes) => setYoutubes(youtubes));
    youtubeApi.search(query).then((youtubes) => setYoutubes(youtubes));
  }, [youtubeApi]);

  // console.log(youtubes);

  return (
    <div className={styles.container}>
      <div className={styles.lnb}>
        <CategoryList categories={categories} />
        <ChannelList channels={channels} />
      </div>
      <ContentList youtubes={youtubes} />
    </div>
  );
}

export default App;
