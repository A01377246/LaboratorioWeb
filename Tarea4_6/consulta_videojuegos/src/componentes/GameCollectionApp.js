import React, { useState } from 'react';
import { GameCollectionAdd } from './GameCollectionAdd';
import { GameResult } from './GameResult';


export const GameCollectionApp = () => {

    const [games, setGames] = useState([0]) //Initialize game state with 0

    return(
        <>
            <GameCollectionAdd setGames = {setGames}/>
            <ol className="list-group list-group-numbered">
                {
                    games.map(game => {
                        return <GameResult
                            key={game}
                            id={game}
                        />
                    })
                }
            </ol>
        </>
    )

}