import Image from "next/image";
import styles from "./page.module.css";
import Banner from '../src/components/Banner.js'
import Menu from '../src/components/Menu'

export default function Home() {
  const menuItems=[
    {id:1, name: 'Cheese Bacon', price: 'R$ 25,90', src: '/cheese-bacon.png', alt: 'Hamburguer de queijo com bacon' },
    {id:2, name: 'Veggie', price:'R$ 30,50', src:'/veggie-burger.png', alt: 'Haburguer vegetariano'},
    {id:3, name:'SmashX', price:'R$ 27,85', src:'/smash-burguer.webp', alt:'O completão da casa'}
  ] 

  return (
    <div className={styles.main}>
      <Banner />
      <Menu items = {menuItems}/>
    </div>
  );
}
