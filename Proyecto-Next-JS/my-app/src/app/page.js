"use client"
import Button from './components/Button';
import Card from './components/Card';
import styles from './page.module.css';

export default function Home() {
  function botonPrueba() {
    console.log("funciona");
  }

  return (
    <>
      <Card className = {styles.Card} titleClassName={styles.titleClassName} footerClassName={styles.footerClassName} title="Lengua y Literatura" teacher="Clase muy entretenida">
        <Button onClick={botonPrueba} text="Lengua" />
        <Button onClick={botonPrueba} text="Lengua" />
      </Card>
    </>
  );
}