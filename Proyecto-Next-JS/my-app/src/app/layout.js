"use client"

import styles from './page.module.css';
import Icon from "./components/Icon";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.divHeader}>
            <Icon hrefIcon="./predeterminados" srcImg="./Menu.png"></Icon>
          </div>
          <div className={styles.divHeader}>
            <Icon hrefIcon="./predeterminados" srcImg="./MasClase.png"></Icon>
            <Icon hrefIcon="./predeterminados" srcImg="./Puntos.png"></Icon>
            <Icon hrefIcon="./predeterminados" srcImg="./Usuario.png"></Icon>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
