"use client"

import styles from "./Card.module.css"

export default function Card({title, curse, teacher, onClick, children, imageUrl, dirDeClase}) {
    return (
        <div className={styles.Card}>
            <div className={styles.titleClassName}>
                <a href={dirDeClase}>
                    <h2 className={styles.h2}>{title}</h2>
                    <h4 className={styles.h4}>{curse}</h4>
                </a>
                
                <p className={styles.p} onClick={onClick}>{teacher} </p>
            </div>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="Superpuesta" className={styles.imagenSuperpuesta}></img>
            </div>
            <br />
            <br />
            <div className={styles.footerClassName}>
                {children}
            </div>  
            <br />
            
        </div>
    )
}