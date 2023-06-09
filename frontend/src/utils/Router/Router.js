// import modules/packages
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";

// router component
const Router = () =>{
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } ></Route>
        </Routes>
    );
};

export default Router;