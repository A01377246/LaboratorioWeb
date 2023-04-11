import React, { Fragment } from "react"
//Importar imágenes para que puedan ser utilizadas en react
import tlou from "./imagenes/tlou.jfif"
import tloz from "./imagenes/tloz.jpg"
import h3ODST from "./imagenes/odst.jfif" 

import './stylesheets/ListaVideojuegos.css'

//arreglo que contiene objetos de videojuego para que sea más fácil acceder a ellos
const arregloDeVideojuegos = [{nombre: "The Last Of  Us",
desarrollador: "Naughty Dog",
fechaLanzamiento: "Junio 14, 2013",
imagen: tlou
},
{nombre: "The Legend Of Zelda Twilight Princess",
desarrollador: "Nintendo",
fechaLanzamiento: "Noviembre 19, 2006",
imagen: tloz
},
{nombre: "Halo 3 ODST",
desarrollador: "Bungie",
fechaLanzamiento: "Septiembre 22, 2009",
imagen: h3ODST
}
];

const ListaVideojuegos = () => {
    return(
    <Fragment>
        <p id= "LastOfUs">{arregloDeVideojuegos[0]["nombre"]}</p>
        <div className = "gameDescription">
            <p>{`Desarrollador: ${arregloDeVideojuegos[0]["desarrollador"]}`}</p>
            <p>{`Fecha de Lanzamiento: ${arregloDeVideojuegos[0]["fechaLanzamiento"]}`}</p>
        </div>
        <div className="gameImagePlaceholder"><img src = {arregloDeVideojuegos[0]["imagen"]} className = "gameImage"></img></div>

        <p id = "Zelda">{arregloDeVideojuegos[1]["nombre"]}</p>
        <div className = "gameDescription">
            <p>{`Desarrollador: ${arregloDeVideojuegos[1]["desarrollador"]}`}</p>
            <p>{`Fecha de Lanzamiento: ${arregloDeVideojuegos[1]["fechaLanzamiento"]}`}</p>
        </div>
        <div className="gameImagePlaceholder"><img src = {arregloDeVideojuegos[1]["imagen"]} className = "gameImage"></img></div>
        
        <p id = "Halo">{arregloDeVideojuegos[2]["nombre"]}</p>
        <div className = "gameDescription">
            <p>{`Desarrollador: ${arregloDeVideojuegos[2]["desarrollador"]}`}</p>
            <p>{`Fecha de Lanzamiento: ${arregloDeVideojuegos[2]["fechaLanzamiento"]}`}</p>
        </div>
        <div className="gameImagePlaceholder"><img src = {arregloDeVideojuegos[2]["imagen"]}className = "gameImage"></img></div>
    </Fragment>
    );
}


export default ListaVideojuegos;