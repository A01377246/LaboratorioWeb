import React, { useState } from 'react';
import { GameCollectionAdd } from './GameCollectionAdd';
import { GameResult } from './GameResult';


export const GameCollectionApp = () => {

    const [games, setGames] = useState([]) //Initialize game state with 
    return(
        <>

            <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Gamebook</h1>
                                <p className="lead">¡Bienvenido a la página donde podrás consultar información de
                                    videojuegos!</p>
                            </div>
            </div>
            <GameCollectionAdd setGames = {setGames}/>
            
            <ol className="list-group list-group-numbered">
            <div className = "d-flex flex-row">
                {
                    games.map(game => {
                        return <GameResult
                            key={game}
                            gameID={game}
                        />
                    })
                }
             </div>
            </ol>
        </>
    )

}