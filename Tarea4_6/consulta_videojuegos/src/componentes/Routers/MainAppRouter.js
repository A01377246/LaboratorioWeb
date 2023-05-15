import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LoginScreen } from "../Login";
import { GamesRouter } from "./GamesRouter";

    // A use stake hook is not necessary because we are not changing the value contained by the user or password variable

export const MainAppRouter = () =>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen/>} />
                    <Route
                    path="*"
                    element={<GamesRouter/>}
                    />
                </Routes>
            </div>
            </Router>
    )
}