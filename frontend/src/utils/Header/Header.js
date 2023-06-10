// import modules/packages
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Header.css";

// header component
const Header = () =>{
    return (
        <div className="header">
            <div className="nav">
                <ol className="main-menu">
                    <li className="nav-item">
                        <NavLink to="/" style={({isActive})=> isActive? {color: "salmon"}: {color: "teal"}} className="nav-item-link" end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todo/new-todo" style={({isActive})=> isActive? {color: "salmon"}: {color: "teal"}} className="nav-item-link" end>New Todo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" style={({isActive})=> isActive? {color: "salmon"}: {color: "teal"}} className="nav-item-link" end>+ projects</NavLink>
                    </li>                    
                </ol>
            </div>
        </div>
    );
};

export default Header;