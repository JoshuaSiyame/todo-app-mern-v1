// import modules/packages
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";

// header component
const Header = () =>{
    return (
        <div className="header">
            <div className="nav">
                <ol className="main-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-item-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/new-todo" className="nav-item-link">New Todo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-item-link">+ projects</Link>
                    </li>                    
                </ol>
            </div>
        </div>
    );
};

export default Header;