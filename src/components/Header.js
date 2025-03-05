import styles from './Header.module.css'
import Link from 'next/link';
import  '@fontsource/work-sans'
export default function Header(){
    return(
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}>
            🍔 <Link href='/'>Burguer House</Link>
            </div>
            <ul className={styles.menu}>
                <li className={styles.commonButton}><Link href='/menu'>Menu</Link></li>
                <li className={styles.commonButton}><Link href='/sobre'>Sobre</Link></li>
                <li className={styles.commonButton}><Link href='/contato'>Contato</Link></li>
            </ul>
            <button className={styles.commonButton}>Peça Agora</button>
        </nav>
      </header>
    )
}