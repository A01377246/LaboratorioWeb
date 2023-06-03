import React from "react";
import { useState } from "react";
import { MainAppRouter } from "./componentes/Routers/MainAppRouter";
import { UserContext} from "./hooks/UserContext";

export const SPAGameApp = () => {

    //The provider must wrap all the components that will access its values
    //Since MainAppRouter Wraps the normal router and this router is the parent of other components, then the child components 
    //will also have access to the username and password.

    const[username, setUsername] = useState("") //The setUsername function will provide the provider (pun intented) with the function 
                                                //to change the value of username whenever someone logs in

    return(
        <>
        <UserContext.Provider value = {
            {
                username,
                setUsername
            }
        }>
            <MainAppRouter/>
        </UserContext.Provider>
        </>
    )
}