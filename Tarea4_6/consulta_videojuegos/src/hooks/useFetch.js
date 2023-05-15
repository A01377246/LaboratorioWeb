import {useState, useEffect} from "react"; 

export const useFetch = (url) => {
     
    //Keeping track of the videogameState 
    const [videoGamestate, setVideogameState] = useState({
        info: null, 
        loading: true, //default, start loading
        error: null
    });


    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json()

        })
        .then((info) =>{
            setVideogameState({
                info,
                loading: false, 
                error: null
            });
        console.log("Hello from use fetch, the info: ", info)});

        return () => {
            /*
            videoGamestate.info = null
            videoGamestate.loading = true
            videoGamestate.error = null 
            */
            setVideogameState({
                loading: true,
                error: null,
                info: null

            });
            
        }
        
    }, [url]);
    return videoGamestate
}