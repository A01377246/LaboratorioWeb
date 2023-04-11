import {useState, useEffect} from "react"; 

export const useFetch = (url) => {

    let dataObject = {
        info: null, 
        loading: true,
        error: null
    }

    const [state, setState] = useState(dataObject);


    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json()

        })
        .then((info) =>{
            setState({
                loading: false,
                error: null,
                info
            });
        });
        return () => {
            setState({
                loading: true, 
                error: null,
                info: null
            });
        }
    }, [url]);
    return state 
}