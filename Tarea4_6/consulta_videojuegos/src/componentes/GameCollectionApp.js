import React, { useEffect, useReducer} from 'react';
import { videogameReducer } from '../hooks/videogameReducer';
import { GameResult } from './GameResult';
import {useForm} from '../hooks/useForm';
import { GameCollectionItem } from './GameCollectionItem';

const init = () => {return JSON.parse(localStorage.getItem("Videogames")) || [];}

export const GameCollectionApp = () => {

    //localStorage.clear("Videogames")

    const [videogameState, dispatch] = useReducer(videogameReducer, [], init)

    const [{gameID}, handleInputChange, reset] = useForm({})

    useEffect(() => {
        localStorage.setItem('Videogames', JSON.stringify(videogameState))
    }, [videogameState])


    const handleAddGame = (e) => {
        e.preventDefault()

        if(gameID.trim().length === 0){
            return
        }
        const game = {
            id: gameID
        }
        const action = {
            type: 'add',
            payload: game
        }
        dispatch(action);
        reset();
    }

    const addGame = (game) =>{
        const action = {
            type: 'add', 
            payload: game
        }
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
                {
                    videogameState.map(game => {
                        return <GameResult
                            key={game.id}
                            gameID={game.id}
                            handleDeleteGame = {handleDeleteGame}
                            addGame = {addGame}
                        />
                    })
                }
             </div>
            </ol>
        </>
    )

}
