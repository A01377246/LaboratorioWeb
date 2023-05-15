import React from "react"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm"

export const GameCollectionAdd = ({setGameArray, handleAddGame}) =>{

    const [{gameToAddID}, handleInputChange, reset] = useForm({})

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameToAddID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Game has been submitted! id ${gameToAddID}`)

        if(gameToAddID.trim() != 0  && gameToAddID.match(/^[0-9]+$/) != null){

            setGameArray(previousGames => [game, ...previousGames])
            console.log("I will send", game)
            handleAddGame(game)

        //Limpiamos input value
            reset()
    
    }}

   

    let game = {}

    if(!!info && info){
        game.id = info.id 
        game.name = info.name
        game.image = info.background_image 
        game.rating = info.rating
        game.metacritic = info.metacritic
    }


    return (
            <form onSubmit={handleSubmit}>
                <div className = "input-group input-group-sm mb-3">
                    <input
                        type = "text"
                        name = "gameToAddID"
                        autoComplete="off"
                        placeholder="Type game ID"
                        value = {gameToAddID}
                        onChange = {handleInputChange}
                        className="form-control">
                    </input>
                    <button
                        type = "submit"
                        className = "btn btn-outline-primary mt-1 btn-block"
                        value = "Add game to my collection">
                    Add Game</button>
                </div>
            </form>
    )

}