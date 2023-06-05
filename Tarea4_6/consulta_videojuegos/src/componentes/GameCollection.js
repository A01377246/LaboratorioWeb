import React from "react"
import { GameCollectionItem } from "./GameCollectionItem"
import { useContext } from "react"
import { UserContext } from "../hooks/UserContext"
import { useState, useEffect} from "react"


export const GameCollection = ({searchCriterion, searchState}) =>{

    const [gameCollection, setGameCollection] = useState([])

    const loggedUsername =  useContext(UserContext).username

    useEffect(() => {


        const getGameCollection = async() => {
            let response = await fetch(`http://localhost:8585/games/getCollectionByUsername/${loggedUsername}`)
            let {collection} = await response.json();
            setGameCollection(collection)
            return 
        }

        const getGameCollectionByGameName = async() =>{

            console.log(`I will fetch from http://localhost:8585/games/getGameByUsernameAndGameName/${loggedUsername}/${searchCriterion}`)
          
            let response = await fetch(`http://localhost:8585/games/getGameByUsernameAndGameName/${loggedUsername}/${searchCriterion.trim()}`)
            let {collection} = await response.json()
            console.log(collection)

            if(collection){
                setGameCollection(collection)
            }else{
                alert('wtf is that mate')
            }
          
            return
        }

        if (searchCriterion !== '' && searchState){
            getGameCollectionByGameName()
        }else{
            getGameCollection()
        } 
    }, [loggedUsername, searchCriterion, searchState])

    //console.log(`Da game Collection ${gameCollection}`)
     return(
            <div className = "d-flex flex-row">
            {
                gameCollection.map(game => {
                    return(<GameCollectionItem key = {game.id} Game={(game)}></GameCollectionItem>)
           })
            }
            </div>
        )
    
}


