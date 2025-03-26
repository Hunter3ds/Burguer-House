import Image from "next/image";
import styles from "./page.module.css";
import Banner from '../src/components/Banner.js'
import Menu from '../src/components/Menu'

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      
    </div>
  );
}
