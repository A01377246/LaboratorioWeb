import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { GameResult } from './GameResult'
import { useForm } from '../hooks/useForm'
import { getGamesBySearch } from "../selectors/getGamesBySearch"

let collection = JSON.parse(localStorage.getItem("Videogames"))

//console.log("col", collection)

export const SearchCollection = () => {

    const location = useLocation();
    const { search = "" } = queryString.parse(location.search);

    //const filteredGames = collection;

    const [formValues, handleInputChange] = useForm({
        searchCriterion: ''
    });

    const { searchCriterion } = formValues

    const filteredGames = useMemo(() => getGamesBySearch(search, collection), [search])

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchCriterion)
        navigate(`?search=${searchCriterion}`);
    }

    return (
        <>
            <h1>Buscador</h1>
            <br />
            <div className="row">
                <div className="col-5">
                    <h4>Search My collection</h4>
                    <br />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchCriterion"
                            value={searchCriterion}
                            onChange={handleInputChange}
                            autoCorrect='off'
                        />
                        <button type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <br />

                    {
                        (search === '')
                        &&
                        <div className="alert alert-info">
                            Please type the search parameters
                        </div>
                    }
                    {
                        (search !== '' && filteredGames.length === 0)
                        &&
                        <div className="alert alert-danger">
                            Game does not exist: {search}
                        </div>
                    }

                    {//Recorremos el resultado de la búsqueda de los juegos.
                        filteredGames.map(game => {
                            return <GameResult
                                key={game}
                                gameID={game.id}
                            >

                            </GameResult>
                        })
                    }
                </div>
            </div>
        </>)
}
