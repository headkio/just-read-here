import CategoryList from '../CategoryList/CategoryList';
import ContentList from '../ContentList/ContentList';
import styles from './App.module.css';

function App() {
  const categoryList = [{
    id: 1,
    name: "IT"
  }, {
    id: 2,
    name: "Game"
  }];

  const youtubeList = [{
    id: "AIBKXDH",
    title: "Let's review mac pro 1"
  }, {
    id: "QIUFDSF",
    title: "Cover k-pop music!!"
  }];

  return (
    <div className={styles.container}>
      <CategoryList categoryList={categoryList} />
      <ContentList youtubeList={youtubeList} />
    </div>
  );
}

export default App;
