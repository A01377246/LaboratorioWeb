import React from "react";
import { MainAppRouter } from "./componentes/Routers/MainAppRouter";
import { UserContext } from "./hooks/UserContext";

const username = "FredoGodoFredo"
const password = "TheGrimAdventures@17"

export const SPAGameApp = () => {

    //The provider must wrap all the components that will access its values
    //Since MainAppRouter Wraps the normal router and this router is the parent of other components, then the child components 
    //will also have access to the username and password.

    return(
        <>
        <UserContext.Provider value = {
            {
                username,
                password
            }
        }>
            <MainAppRouter/>
        </UserContext.Provider>
        </>
    )
}