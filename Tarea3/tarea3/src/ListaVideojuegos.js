import React, { Fragment } from "react"
//Importar imágenes para que puedan ser utilizadas en react
import tlou from "./imagenes/tlou.jfif"
import tloz from "./imagenes/tloz.jpg"
import h3ODST from "./imagenes/odst.jfif" 

//arreglo que contiene objetos de videojuego para que sea más fácil acceder a ellos
const arregloDeVideojuegos = [{nombre: "The Last Of us",
desarrollador: "Naughty Dog",
fechaLanzamiento: "June 14, 2013",
imagen: tlou
},
{nombre: "The Legend Of Zelda Twilight Princess",
desarrollador: "Nintendo",
fechaLanzamiento: "November 19, 2006",
imagen: tloz
},
{nombre: "Halo 3 ODST",
desarrollador: "Bungie",
fechaLanzamiento: "September 22, 2009",
imagen: h3ODST
}
];

const ListaVideojuegos = () => {
    return(
    <Fragment>
        <p>{arregloDeVideojuegos[0]["nombre"]}</p>
        <p>{arregloDeVideojuegos[0]["desarrollador"]}</p>
        <p>{arregloDeVideojuegos[0]["fechaLanzamiento"]}</p>
        <img src = {arregloDeVideojuegos[0]["imagen"]}></img>

        <p>{arregloDeVideojuegos[1]["nombre"]}</p>
        <p>{arregloDeVideojuegos[1]["desarrollador"]}</p>
        <p>{arregloDeVideojuegos[1]["fechaLanzamiento"]}</p>
        <img src = {arregloDeVideojuegos[1]["imagen"]}></img>
        
        <p>{arregloDeVideojuegos[2]["nombre"]}</p>
        <p>{arregloDeVideojuegos[2]["desarrollador"]}</p>
        <p>{arregloDeVideojuegos[2]["fechaLanzamiento"]}</p>
        <img src = {arregloDeVideojuegos[2]["imagen"]}></img>
    </Fragment>
    );
}


export default ListaVideojuegos;