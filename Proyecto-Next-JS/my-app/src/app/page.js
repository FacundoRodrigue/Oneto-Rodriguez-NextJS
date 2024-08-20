"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Icon from './components/Icon';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function Home() {
  let [numero, setNumero] = useState(0);
  let [nombre, setNombre] = useState("");
  const [restar, setRestar] = useState(false)
  const router = useRouter(); //Habilitar el router de next

  function cambioDeDIreccion(){
    router.push("/predeterminados")
  }
  

  function incrementarODecrementarUno() {
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
    incrementarODecrementarUno()
  }

  function trueOFalse(event){
    console.log(event.target.checked)
    setRestar(event.target.checked);
  }
  function cambio(event){
    return setNombre(event.target.value);
  }
  function handleNombreChangeDos() {
    
    if ( restar == true){
      setNumero(numero - 1)
    } else{
      setNumero(numero + 1)
    }
  }
  

  return (
    <>
      <main className={styles.main}>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={cambioDeDIreccion} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        <Card title="Lengua y Literatura" curse="5to A informatica" teacher="Martin Rivas" imageUrl="/TeacherMessi.png">
          <Button onClick={() => console.log("funciona")} text="Lengua" />
          <Button onClick={() => console.log("funciona")} text="Lengua" />
        </Card>
        
      </main>

      <footer className={styles.footer}>
        <div>
          <h1>Ejercicio del profe</h1>
          <h2>Numero: {numero}</h2>
          <h2>Nombre: {nombre}</h2>
          <Button onClick={handleNombreChange} text="Cambiar Nombre" />
          <input placeholder='Ingrese el nombre' id="nombreInput" type="text" />
          <Checkbox type="checkbox" id="decrementar" name="decrementar" forInput="decrementar" text="¿Decrementar?"></Checkbox>
          <br/>
        </div>
        <div>
          <h1>Ejercicio del profe | Mejora con OnChange</h1>
          <h2>Numero: {numero}</h2>
          <h2>Nombre: {nombre}</h2>
          <Button onClick={handleNombreChangeDos} text="Cambiar Nombre" />
          <input placeholder='Ingrese el nombre'  type="text" onChange={cambio}/>
          <Checkbox type="checkbox"  name="decrementarDos" forInput="decrementarDos" text="¿Decrementar?" onChange={trueOFalse}></Checkbox>
          <br/>
        </div>
      </footer>
    </>
  );
}