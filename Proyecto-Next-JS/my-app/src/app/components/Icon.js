"use client"

import Link from "next/link"
import styles from "./Icon.module.css"
import clsx from "clsx"

export default function Icon({hrefIcon, srcImg}) {
    return(
        <Link href={hrefIcon}>
            <img src={srcImg} className={styles.icon}></img>
        </Link>
    )
}