import React from "react"
import { GameCollectionItem } from "./GameCollectionItem"


export const GameCollection = ({gameCollection}) =>{

    console.log(`poptart!${JSON.stringify(gameCollection)} len: ${gameCollection.length}`)

     return(
            <div className = "d-flex flex-row">
            {
                gameCollection.map(game => {
                    <GameCollectionItem key = {game["id"]} Game={game}></GameCollectionItem>
                    console.log(`sending ${game}`)
            })
            }
            </div>
        )
    
}


