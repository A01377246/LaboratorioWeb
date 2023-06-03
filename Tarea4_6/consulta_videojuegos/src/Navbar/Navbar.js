import React, { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";


export const Navbar = () =>{
    const {username} = useContext(UserContext); //Recover the user from the context created on SPAGameApp

    return (
        <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className = "navbar-brand"
                to = "/"
            >
                Gamebook
            </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/GameCollectionApp"
            >
            Add to my Collection
            </NavLink>
            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/BrowseByGenre"
            >
            Browse By Genre
            </NavLink>
            <NavLink
            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
            exact="true"
            to="/BrowseMyCollection"
            >
            Browse My Collection
            </NavLink>


        
            </div>
            </div>

            <div style={{color: "#ffd700", marginLeft:"850px"}} >{username}</div>


           
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className = "navbar-nav ml-auto">
                    <NavLink
                    className={({isActive}) => isActive ? "active": "nav-item nav-link"}
                    exact = "true"
                    to = "/"
                    >Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}