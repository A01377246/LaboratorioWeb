import React, { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export const GameCollectionAdd = ({setGames}) =>{

    
    const [gameToAddID, setGameToAddID] = useState('Enter game to add')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Game has been submitted!`)
        if(gameToAddID.trim().length > 4){
        setGames(currentIDs=> [gameToAddID, ...currentIDs] );
        //Limpiamos input value
        setGameToAddID('');
        }
        
    
    }

    const handleGameToAddIDChange = (e) =>{
        setGameToAddID(e.target.value);
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className = "input-group input-group-sm mb-3">
                    <input
                    type = "text"
                    value = {gameToAddID}
                    onChange = {handleGameToAddIDChange}>
                    </input>
                    <input
                    type = "submit"
                    value = "addGameToCollection">
                    </input>
                </div>
            </form>
    )

}