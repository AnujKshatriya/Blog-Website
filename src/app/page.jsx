import {Cardlist,Featured,CategoryList} from "../components/index.js"
import styles from "./page.module.css"

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <Cardlist page={page}/>
      </div>
    </div>
  );
}
