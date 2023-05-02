import React from 'react';
import { InfoVideojuegos } from './InfoVideojuegos';
import { useFetch } from '../hooks/useFetch';
import loadingImage from "../images/loadingGears.gif"
//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {
    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetros del
    // componente.

    //Llamar al custom hook use fetch para invocar la página de rawg
    const {loading, info} = useFetch(`https://api.rawg.io/api/games?key=2c08944555fe4d9cbbdbf5aa124a5e4d&genres=${genero}`) 

    //destructurar la información si la información no es nula y existe
    
    const {results} = !!info && info; 

    

    let juegos;  //variable donde se guardará el resultado de mapear cada juego

   
    /*useEffect(() => {
        getVideojuegos();
    }, []);

    c

    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman
        const url = 'https://api.rawg.io/api/games?key=2c08944555fe4d9cbbdbf5aa124a5e4d&genres=' + genero;
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const { results } = await respuesta.json();
    */


    //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
    if(!!results && results){
            juegos = results.map(juego => {
            return {
                    id: juego.id,
                    nombre: juego.name,
                    imagen: juego.background_image,
                    rating: juego.rating,
                    metacritic: juego.metacritic
                }
            })
        console.log(juegos)
}

    
    //Invocamos la función para hacer la prueba de que muestre el resultado en la consola del navegador.

    return (
        <>
        {
            loading 
            ?
            (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
            )
            :
        <div className = "row"> 
            <h3 className="card-title">{genero}</h3>
                {juegos.map(juego =>{
                return(
                    <InfoVideojuegos key = {juego["id"]} Juego={juego}></InfoVideojuegos>
                )
                })
                }
        </div>
        }
        </>)
        }

