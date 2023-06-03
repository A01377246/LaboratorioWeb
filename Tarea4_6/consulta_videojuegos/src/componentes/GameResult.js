import React, { useEffect } from 'react';
import { useFetch} from '../hooks/useFetch';
import loadingImage from "../images/loadingGears.gif"
import { GameCollectionItem } from './GameCollectionItem';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

export const GameResult = ({gameID, handleDeleteGame, dispatch}) =>{

   

    const loggedUsername =  useContext(UserContext).username  //Import context and then use the username for adding to the specific user collection

    const addGameToUserCollection = async(game, loggedUsername) => {

        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            url: 'http://localhost:8585/games/AddLogEvent',
            body: JSON.stringify({providedUsername: loggedUsername, game: `${game}`})
        }
        await fetch('http://localhost:8585/games/addGameToUserCollection', options)
        return 

    }

    let game = {}

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)

    if(!!info && info){
        game.id = info.id 
        game.name = info.name
        game.image = info.background_image 
        game.rating = info.rating
        game.metacritic = info.metacritic

        console.log(`I found a ${JSON.stringify(game)}`)
    }


    useEffect(() => {
        
    let action ={
        type: "add", 
        payload: game
    }

    dispatch(action)
    addGameToUserCollection(game, loggedUsername)

    
    }, [gameID])

   

    if(gameID){ //Render until a game ID is provided
       return (
            <>
             <div className = "d-flex flex-row">
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
   
}