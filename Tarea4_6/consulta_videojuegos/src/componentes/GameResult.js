import React from 'react';
import { useFetch } from '../hooks/useFetch';
import loadingImage from "../images/loadingGears.gif"
import { GameCollectionItem } from './GameCollectionItem';

export const GameResult = ({gameID, setGames}) =>{


    console.log("The game ID", gameID)
    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)
    console.log("Loading? ", loading)

    let game = {}

    if(!!info && info){
        game.id = info.id 
        game.name = info.name
        game.image = info.background_image 
        game.rating = info.rating
        game.metacritic = info.metacritic

        localStorage.setItem(game.id, JSON.stringify(game))


        return (
            <>
            <div className = "container d-flex flex-row">
            {
                loading 
                ?
                (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
                )
                :
                <GameCollectionItem Game={game} setGames = {setGames} gameID = {gameID}></GameCollectionItem>
            }
             </div>
            </>)
}
}