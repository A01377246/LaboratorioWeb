import { useFetch } from "../hooks/useFetch"
import loadingImage from "../images/loadingGears.gif"
export const TestHook = () =>{
    const state = useFetch("https://api.rawg.io/api/games?key=2c08944555fe4d9cbbdbf5aa124a5e4d&genres=action")
    const {info} = !!state.info && state.info;
    const {results} = !!state.info && state.info;
    console.log(results)
    console.log("the state", state)
    console.log("the info", info)

    return (
        <>
        <p>superImage</p>
        <img src = {loadingImage} alt = "a loading gear"></img>
        </>
    )
}