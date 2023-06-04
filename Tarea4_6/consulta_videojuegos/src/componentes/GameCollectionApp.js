import React, { useEffect, useReducer, useState} from 'react';
import { videogameReducer } from '../hooks/videogameReducer';
import { GameResult } from './GameResult';
import {useForm} from '../hooks/useForm';
import { UserContext } from '../hooks/UserContext';
import { useContext } from 'react';
import { GameCollection } from './GameCollection';

export const GameCollectionApp = () => {

    const [videogameState, dispatch] = useReducer(videogameReducer, [])

    const [searchState, setSearchState] = useState("false")

    const loggedUsername =  useContext(UserContext).username
    console.log(`welcome ${loggedUsername}`)
 

    useEffect(() => {
           
    const initCollection = async() =>{
        let response = await fetch(`http://localhost:8585/games/getCollectionByUsername/${loggedUsername}`) 
        let {collection} = await response.json();
        dispatch({
            type: 'initializeCollection', 
            payload: collection
        })
        
    }
        initCollection()
    }, [loggedUsername])

   
    const [{gameID}, handleInputChange, reset] = useForm({})

    const registerOnLog = async() => {
        
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            url: 'http://localhost:8585/games/AddLogEvent',
            body: JSON.stringify({username: loggedUsername, event: `${loggedUsername} Added a game. ID: ${gameID}`})
        }
        await fetch('http://localhost:8585/games/AddLogEvent', options)
    }

    const handleAddGame = (e) => {
        e.preventDefault()

        if(gameID.trim().length === 0){
            return
        }
        setSearchState(true)
        registerOnLog();
        reset();
    }


    const handleDeleteGame = (gameID) => {
        const action = {
            type: 'delete',
            payload: gameID
        }
        dispatch(action)
    }

    return(        
        <>
            <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Gamebook</h1>
                                <p className="lead">Browse games by ID and add them to your collection!</p>
                            </div>
            </div>

            <form onSubmit = {handleAddGame}>
                <input name = "gameID" type = "text" className = "form-control" placeholder='Game ID to add' value = {gameID} onChange={handleInputChange}>

                </input>
                <button type = "submit" className='btn btn-outline-primary mt-1 btn-block'>Add game to collection</button>
            </form>

            <ol className="list-group list-group-numbered">

     
            <div className = "d-flex flex-row">
                        <GameCollection gameCollection={videogameState}></GameCollection>
                        <GameResult gameID = {gameID} handleDeleteGame={handleDeleteGame} dispatch = {dispatch} searchState={searchState} setSearchState = {setSearchState}></GameResult>
                        
             </div>
            </ol>
                
        </>
    )

}
