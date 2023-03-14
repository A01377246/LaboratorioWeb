
import React, { useEffect, useState } from 'react';
import { InfoVideojuegos } from './InfoVideojuegos';
//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {
    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetros del
    // componente.

    useEffect(() => {
        getVideojuegos();
    }, []);

    const [infoJuegos, setInfoJuegos] = useState([]);

    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman
        const url = 'https://api.rawg.io/api/games?key=2568837646934e36b999ad5ef8017171&genres=' + genero;
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const { results } = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        })
        console.log(juegos);
        setInfoJuegos(juegos)

    }
    //Invocamos la función para hacer la prueba de que muestre el resultado en la consola del navegador.



return (
    <div className = "row"> 
        <h3 className="card-title">{genero}</h3>
            {infoJuegos.map(juego =>{
            console.log("Sending", juego["imagen"])
            return(
                <InfoVideojuegos key = {juego["id"]} Juego={juego}></InfoVideojuegos>
            )
            })
            }
    </div>
)
}
