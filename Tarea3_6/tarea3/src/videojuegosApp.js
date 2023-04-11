import React, {useState} from 'react'; 
import PropTypes from 'prop-types'; 
 
const VideojuegosApp = ({nombre}) =>{ 
 
 const titulo = 'Mis Videojuegos'; 
 const nombreConst = nombre; 
 
 // Pasamos como parámetro de useState el valor 0, que va ser el que le asignará a 
 // cantidadVideojuegos. 
 let [cantidadVideojuegos, setCantidadVideojuegos] = useState(0);

 
 //Creamos una función para incrementar la cantidad de videojuegos que tenemos. 
 //Recibe como parámetro 'e' que representa el evento, en este caso el onClick 
 // sobre el botón. 
 const incrementaVideojuegos = (e) => { 
  //Utilizamos la funcion que obtuvimos con la desestructuración del hook useState 
  // para incrementar el valor de cantidadVideojuegos, el cual también obtuvimos 
  // con dicha desestructuración. 
  setCantidadVideojuegos(cantidadVideojuegos + 1); 
 }
 
 const decrementaVideojuegos = (e) => {

    setCantidadVideojuegos(cantidadVideojuegos - 1); 

 }

 const resetVideojuegos = (e) => {

    setCantidadVideojuegos(cantidadVideojuegos = 0); 

 }
 
 return ( 
  <> 
   <h1>{titulo}</h1> 
   <p>Bienvenidos a la página de Mis Videojuegos</p> 
   <p>Hola {nombreConst}</p> 
   {/* 
    Agregamos un botón para incrementar la cantidad de 
videojuegos que 
     tenemos. 
    Vamos a utilizar el evento onClick para mandar llamar una 
acción cada 
     vez que el usuario haga clic en el botón. En este evento, 
mandamos a 
     llamar la función incrementaVideojuegos.  
    La referencia a los eventos que podemos utilizar con React en 
los 
     elementos de html se puede ver en 
https://reactjs.org/docs/events.html                 
   */} 
   <button onClick = { (e) => { incrementaVideojuegos(e) } }>Incrementa 
Videojuegos</button> 
   {

} 
<button onClick = { (e) => { decrementaVideojuegos(e) } }>Decrementar 
Videojuegos</button> 
{

} 
<button onClick = { (e) => { resetVideojuegos(e) } }>Reinicia 
Videojuegos</button> 
{

    
   
   
   /* 
    Colocamos la cantidad de videojuegos que tenemos. Utilizamos 
el valor de 
    cantidadVideojuegos que obtuvimos con la desestructuración del 
hook useState 
    y que incrementamos en la funcion incrementaVideojuegos. 
      */} 
   <p>Tengo {cantidadVideojuegos} videojuegos</p> 
  </> 
 ); 
 
} 
 
//Indicamos las características de desarrollo de las props 
VideojuegosApp.propTypes = { 
 nombre: PropTypes.string 
} 
 
VideojuegosApp.defaultProps = { 
 nombre: 'Visitante' 
} 
 
export default VideojuegosApp; 