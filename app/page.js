import Image from "next/image";
import styles from "./page.module.css";
import Banner from '../src/components/Banner.js'
import Menu from '../src/components/Menu'

export default function Home() {
  const menuItems=[
    { id: 1, src: '/cheese-bacon.png'   alt:}
  ] 

  return (
    <div className={styles.main}>
      <Banner />
      <Menu items = {menuItems}/>
    </div>
  );
}
