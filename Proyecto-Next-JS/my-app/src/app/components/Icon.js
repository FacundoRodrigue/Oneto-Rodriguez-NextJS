"use client"

import styles from "./Icon.module.css"
import clsx from "clsx"

export default function Icon({hrefIcon, srcImg}) {
    return(
        <a href={hrefIcon}>
            <img src={srcImg} className={styles.icon}></img>
        </a>
    )
}