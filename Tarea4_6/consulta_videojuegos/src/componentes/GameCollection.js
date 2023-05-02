import React from "react"
import { GameCollectionItem } from "./GameCollectionItem"


export const GameCollection = (game) =>{

return(
    <div className = "d-flex flex-row">
    {
       <GameCollectionItem key = {game["id"]} Game={game}></GameCollectionItem>
    }
    </div>
)

}


