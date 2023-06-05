import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../hooks/useForm'
import { GameCollection } from './GameCollection'
import { useState } from 'react'



export const SearchCollection = () => {

    const [searchState, setSearchState] = useState(false)

    const location = useLocation();
    const { search = "" } = queryString.parse(location.search);

    
    const [formValues, handleInputChange] = useForm({
        searchCriterion: ''
    });

    const { searchCriterion } = formValues

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchCriterion)
        setSearchState(true)
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
    
                </div>
                <GameCollection searchCriterion = {searchCriterion} searchState = {searchState} />
            </div>
        </>)
}
