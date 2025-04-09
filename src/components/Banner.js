'use client';

import {useState} from 'react';
import Image from 'next/image'
import styles from './Banner.module.css';

export default function Banner(){
    const [showPromo, setShowPromo] = useState(false)   ;
    return(
        <div className={styles.banner}>
            <Image
            src='/burguer.png'
            alt='Delicioso hambúrguer artesanal'
            fill
            quality={100}
            style={{objectFit: 'cover'}}
            />
            <div className={styles.overlay}>
                <h1 className={styles.title}>O melhor Hambúrguer da Cidade!</h1>
                <p className={styles.text}>Sabor inigualável, ingredientes frescos e uma experiência única para seu paladar.</p>
                <button className={styles.button} onClick={()=> setShowPromo(true)}>Ver promoção</button>
            </div>
            {/* Modal de Promoção */}
            <div className={`${styles.modal} ${showPromo? styles.show: ''}`}>
                <div className={styles.modalContent}>
                    <button className={styles.close} onClick={()=> setShowPromo(false)}>&times;</button>
                    <p className={styles.promo}>🎉 Promoção: Combo Especial por apenas R$ 29,90! 🎉</p>
                </div>
            </div>
        </div>
    );
};