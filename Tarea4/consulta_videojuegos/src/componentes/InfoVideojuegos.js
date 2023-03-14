import React from "react"
import { Fragment } from "react"

//Destructuración a Juego y luego destructuración otra vez para recuperar las propiedades.
export const InfoVideojuegos = ({Juego: {nombre, imagen, rating, metacritic}}) => { 
        return (
        <Fragment style>
                    <div className = "card" style = {{width: "18rem"}}>
                        <img  className = "card-img-top" src = {imagen} alt = {nombre}></img>
                            <div className = "card-body">
                                <h5 className = "card-title">{nombre}</h5>
                                <p className = "card-text">Rating: {rating}</p>
                                <p className = "card-text">Metacritic: {metacritic}</p>
                            </div>
                        </div>
                   
        </Fragment> 
    )
    

}