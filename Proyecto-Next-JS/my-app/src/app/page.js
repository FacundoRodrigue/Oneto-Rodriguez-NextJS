"use client"
import { useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import styles from './page.module.css';

export default function Home() {
  function botonPrueba() {
    console.log("funciona");
  }

  //Ejercicio del Profe INICIO  
  let [numero, setNumero] = useState(0)
  let [nombre, setNombre] = useState("")
  let decremento = document.getElementById("decrementar")
  ;
  console.log(decremento)
  
  function sumarNumero(){
    setNumero(numero+1)
  }
  function cambiarNombre(){
    let nombreModificado = document.getElementById("nombreInput").value;
    setNombre(nombreModificado)
  }
  if (decremento === true){
    useEffect(()=> {
      setNumero(numero-2)
    }, [nombre]
  )
  } else {
    useEffect(()=> {
      setNumero(numero+2)
    }, [nombre]
  )
  }
  //FIN
  return (
    <>
      <Card className = {styles.Card} titleClassName={styles.titleClassName} footerClassName={styles.footerClassName} title="Lengua y Literatura" teacher="Clase muy entretenida">
        <Button onClick={botonPrueba} text="Lengua" />
        <Button onClick={botonPrueba} text="Lengua" />
      </Card>
      <Card className = {styles.Card} titleClassName={styles.titleClassName} footerClassName={styles.footerClassName} title="Lengua y Literatura" teacher="Clase muy entretenida">
        <Button onClick={botonPrueba} text="Lengua" />
        <Button onClick={botonPrueba} text="Lengua" />
      </Card>

      <footer>
        <h1>Ejercicio del profe</h1>
        <h2>Numero: {numero}</h2>
        <Button onClick={sumarNumero} text="Incrementar/Decrementar"/>

        <h2>Nombre: {nombre}</h2>
        <Button onClick={cambiarNombre} text="Cambiar Nombre"/>

        <input placeholder='Ingrese el nombre' id= "nombreInput" type = "text"/>

        <input type='checkbox' id = "decrementar" value="false"></input>
      </footer>
    </>
  );
}