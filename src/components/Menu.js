'use client';
import Image from "next/image";
import styles from './Menu.module.css'

export default function Menu({items}){
    return(
        <div className={styles.menu}>
            <h2>Cardapio de lanches:</h2>
            <div className={styles.cardContainer}>
                {items.map((item, index)=>(
                    <div className={styles.card} key={item.id || index}>
                        <Image 
                        src={item.src} 
                        alt={item.alt} 
                        width={150} 
                        height={150}/>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}