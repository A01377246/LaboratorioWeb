import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ game }) => {

    return (

        <div className="col">
            <div className="card" style={{ maxWidth: 500 }}>
                <img src={`./assets/${game.id}.jpg`} className="card-img-top" alt={game.id} />
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <p className="card-text">{game.developer}</p>
                    <Link to={`/game/${game.id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
    
}