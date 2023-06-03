import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../hooks/UserContext";

export const LoginScreen = () => {

    const {setUsername} = useContext(UserContext)
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const checkIfUserExists = async(username) =>{
       
        let response = await fetch(`http://localhost:8585/games/checkIfUserExists/${username}`)
        let {userExists} = await response.json()

        return userExists

    }


    const addEventToLog = async(loginMessage, enteredUsername) => {
        if(loginMessage !== "logged in"){
            //There is no point in creating a log for a user that is not registered on the db therefore a log will only be created if the user exists
            if(await checkIfUserExists(enteredUsername)){
                let options = {
                    method: "POST",
                    headers: {"Content-Type": "application/json;charset=utf-8"},
                    url: 'http://localhost:8585/games/AddLogEvent',
                    body: JSON.stringify({username: enteredUsername, event: `${loginMessage} for ${enteredUsername}`})
                }
                await fetch('http://localhost:8585/games/AddLogEvent', options)
                return
        }}else{

                let options = {
                    method: "POST",
                    headers: {"Content-Type": "application/json;charset=utf-8"},
                    url: 'http://localhost:8585/games/AddLogEvent',
                    body: JSON.stringify({username: enteredUsername, event: `${enteredUsername} ${loginMessage}`})
                }
                await fetch('http://localhost:8585/games/AddLogEvent', options)
                return


           
        }
    
       

       
    }

    
//This helper function will receive the entered username and entered password. It will make a request to the database for checking credentialss.
    const attemptLogin = async(enteredUsername, enteredPassword) =>{
        //The credential object will be send on the body of the URL
        const credentialObject = {providedUsername: enteredUsername, providedPassword: enteredPassword}
        const options = {
            method: 'POST', 
            headers: {"Content-Type": "application/json;charset=utf-8"},
            url: 'http://localhost:8585/games/login',
            body: JSON.stringify(credentialObject)
        }
        const response = await fetch(`http://localhost:8585/games/login`, options)
        return await response.json()
    }



    const navigate = useNavigate();

    const doLogin = async(e) => {
        e.preventDefault();
        let {loginResult} = await attemptLogin(enteredUsername, enteredPassword)
        if(loginResult){
            setUsername(enteredUsername)
            addEventToLog("logged in", enteredUsername)
            navigate("*");
            setEnteredUsername(''); 
            setEnteredPassword('');
            
        }else{
            alert("Incorrect username or password, please try again");
            addEventToLog("Failed Login Attempt", enteredUsername)
            setEnteredUsername(''); 
            setEnteredPassword('');
           
        }
    }


    return (
        <>
            <h1>Login</h1>
            <br />

            <div>
                <form onSubmit={doLogin}>
                    <input
                        type = "text"
                        className="form-control"
                        name = "enteredUser"
                        placeholder="Enter your username"
                        onChange={(event) => 
                        setEnteredUsername(event.target.value)}
                        value = {enteredUsername}
                    />
                    <input
                        type = "password"
                        className="form-control"
                        name = "enteredPassword"
                        placeholder="Password"
                        onChange={(event) => 
                        setEnteredPassword(event.target.value)}   
                        value = {enteredPassword}
                    />
                     <button type = "submit" 
                     className="btn m-1 btn-block btn-outline-primary"
                    >Login
                     </button>
                </form>

            </div>
           
        </>
    )
}
