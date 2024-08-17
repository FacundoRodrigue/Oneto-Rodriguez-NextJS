"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Icon from './components/Icon';

export default function Home() {
  let [numero, setNumero] = useState(0);
  let [nombre, setNombre] = useState("");

  function incrementarODecrementar() {
    let decrementar = document.getElementById("decrementar").checked
    
    if (decrementar==false) {
      setNumero(numero += 1);
    } else {
      setNumero(numero -= 1);
    }
  }

  function handleNombreChange() {
    const nombreModificado = document.getElementById("nombreInput").value;
    setNombre(nombreModificado);
    incrementarODecrementar()
  }

  return (
    <>
      <main className={styles.main}>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Clase muy entretenida">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" teacher="Clase muy entretenida">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" teacher="Clase muy entretenida">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" teacher="Clase muy entretenida">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" teacher="Clase muy entretenida" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
      </main>

      <footer>
        <h1>Ejercicio del profe</h1>
        <h2>Numero: {numero}</h2>

        <h2>Nombre: {nombre}</h2>
        <Button onClick={handleNombreChange} text="Cambiar Nombre" />
        <input placeholder='Ingrese el nombre' id="nombreInput" type="text" />
        <div >
          <input type="checkbox" id="decrementar" name="decrementar" />
          <label for="decrementar">decrementar</label>
        </div>
      </footer>
    </>
  );
}