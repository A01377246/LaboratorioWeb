import { createContext } from "react"; 

export const UserContext = createContext({
    username: null,
    setUsername: (loggedInUsername) => {} //Placeholder, nothing to see here, kids
});  //Default value for context