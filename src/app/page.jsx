import {Cardlist,Featured,CategoryList,Menu,Pagination} from "../components/index.js"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <Cardlist/>
        <Menu/>
      </div>
    </div>
  );
}
