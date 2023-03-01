import React, { Fragment } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import ListaVideojuegos from './ListaVideojuegos';
 
const titulo = <h1>Mis Videojuegos</h1>; 
 
const container = document.getElementById('root'); 
const root = createRoot(container); 
 
//Utilizamos el JSX que devuelve el componente VideojuegosApp para injectar ese html 
// en divRoot 
root.render(<ListaVideojuegos/> ); 