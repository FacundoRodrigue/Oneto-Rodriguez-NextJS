"use client"

import styles from "./Button.module.css"
import clsx from "clsx"

export default function Button({onClick, text, variant}) {
    return (
        <button className={
            clsx(
                {
                    [styles.button]:true,
                    [styles.variant_meet]: variant == "meet",
                    [styles.variant_asigment]: variant == "asigment",
                }
            )}
            onClick={onClick} >{text}</button>
    )
}