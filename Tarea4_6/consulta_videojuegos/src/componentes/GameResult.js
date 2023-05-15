import React from 'react';
import { useFetch} from '../hooks/useFetch';
import loadingImage from "../images/loadingGears.gif"
import { GameCollectionItem } from './GameCollectionItem';

export const GameResult = ({gameID, handleDeleteGame, addGame}) =>{

    const oldGames = JSON.parse(localStorage.getItem("Videogames"))

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)

    let action = null;

    let game = {}

    if(!!info && info){
        game.id = info.id 
        game.name = info.name
        game.image = info.background_image 
        game.rating = info.rating
        game.metacritic = info.metacritic
        
        oldGames.map(oldGame => {
            if(oldGame.id == game.id){
                oldGame.name = game.name
                oldGame.image = game.image
                oldGame.rating = game.rating
                oldGame.metacritic = game.metacritic
            }
        })
        localStorage.setItem('Videogames', JSON.stringify(oldGames))
    }



    action = {
        type: "add",
        payload: game
    }

        return (
            <>
            <div className = "container d-flex flex-row">
            {
                loading
                ?
                (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
                )
                :
                <GameCollectionItem Game={game} gameID = {gameID} handleDeleteGame = {handleDeleteGame}></GameCollectionItem>
            }
             </div>
            </>)
   
}