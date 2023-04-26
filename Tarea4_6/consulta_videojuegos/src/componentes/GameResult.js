import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import loadingImage from "../images/loadingGears.gif"
import { GameCollectionItem } from './GameCollectionItem';
import { GameCollection } from './GameCollection';

export const GameResult = ({gameID}) =>{


    const [game, setGameObjectList] = useState([])

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)
    console.log("Loading? ", loading)

    
    

    console.log("the game state:", game)
    


    if(!!info && info){
        game.id = info.id 
        game.name = info.name
        game.image = info.background_image 
        game.rating = info.rating
        game.metacritic = info.metacritic


        return (
            <>
            <div className = "container d-flex flex-row">
            {
                loading 
                ?
                (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
                )
                :
                
                <GameCollectionItem key = {game["id"]} Game={game}></GameCollectionItem>
               
            }
             </div>
            </>)
}
}