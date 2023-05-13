import React, { useState } from 'react';
import { MultipleCustomHooks } from '../MultipleCustomHooks';
export const UseRefMultipleCustomHooks = () => {
//Creamos un hook useState para controlar una variable booleana que vamos a utilizar para determinar si se
// muestra o no el componente MultipleCustomHooks
const [muestraComponente, setMuestraComponente] = useState();
//Función para manejar la bandera muestraComponente
const handleMostrarOcultar = () => {
    setMuestraComponente(!muestraComponente);
    }
    return (
    <>
    <h1>Ejemplo de useRef</h1>
    <hr />
    <button
    className="btn btn-primary mt-5"
    onClick={handleMostrarOcultar}
    >
    Mostrar/Ocultar
    </button>
    {/*
    Mandamos llamar el componente 'MultipleCustomHooks. Si muestraComponente es true entonces se
    evalúa el lado derecho del && que es llamar el componente MultipleCustomHooks
    */}
    {muestraComponente && <MultipleCustomHooks />}
    </>
    )
    }