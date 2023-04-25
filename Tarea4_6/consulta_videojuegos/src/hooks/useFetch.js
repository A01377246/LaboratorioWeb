import {useState, useEffect} from "react"; 

export const useFetch = (url) => {

    /*let dataObject = {
        info: null, 
        loading: true,
        error: null
    }*/
     
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
            /*videoGamestate.info = info
            videoGamestate.loading = false 
            videoGamestate.error = null 
            */
            setVideogameState({
                info,
                loading: false, 
                error: null
            });
        });

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