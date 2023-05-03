import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../hooks/UserContext";

export const LoginScreen = () => {

    const {username, password} = useContext(UserContext)

    console.log("Username:", username, typeof(username), "password", password, typeof(password))

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    

    const navigate = useNavigate();
    const doLogin = (e) => {
        e.preventDefault();
        if(enteredUsername === username && password === enteredPassword){
            navigate("/");
            setEnteredUsername(''); 
            setEnteredPassword('');
        }else{
            alert("Incorrect username or password, please try again");
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
                    />
                    <input
                        type = "password"
                        className="form-control"
                        name = "enteredPassword"
                        placeholder="Password"
                        onChange={(event) => 
                        setEnteredPassword(event.target.value)}   
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
