import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import ContentList from "../ContentList/ContentList";
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

  const query = "잇섭";

  useEffect(() => {
    // youtubeApi.getMostPopular().then((youtubes) => setYoutubes(youtubes));
    youtubeApi.search(query).then((youtubes) => setYoutubes(youtubes));
  }, [youtubeApi]);

  // console.log(youtubes);

  return (
    <div className={styles.container}>
      <CategoryList categoryList={categories} />
      <ContentList youtubes={youtubes} />
    </div>
  );
}

export default App;
