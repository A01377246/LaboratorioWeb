import { Fragment } from "react"

export const GameCollectionItem = ({Game: {name, image, rating, metacritic}, setGames, gameID}) => { 


    const handleDelete = (e) =>{
        setGames(current => current.filter(game => game !== gameID))
        console.log("Remove clicked, key:", gameID)
    }

    return (       
        <Fragment>
                    
                  <div className = "card " style = {{width: "18rem"}}>
                    <img  className = "card-img-top" src = {image} alt = {name}></img>
                        <div className = "card-body">
                            <h5 className = "card-title">{name}</h5>
                            <p className = "card-text">Rating: {rating}</p>
                            <p className = "card-text">Metacritic: {metacritic}</p>
                        </div>
                        <div className = 'card-footer'>
                            <div className="col-6 pr-0">
                                <button className="btn btn-link btn-block" onClick = {handleDelete}>Remove</button>
                            </div>
                        </div>
                    </div>
        </Fragment>
   
)
}