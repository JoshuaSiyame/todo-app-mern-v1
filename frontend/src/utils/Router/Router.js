// import modules/packages
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import SingleTodo from "../../components/Todo/Todo";

// router component
const Router = () =>{
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } ></Route>
            <Route path="/todo">
                <Route path=":todoId" element={ <SingleTodo /> } ></Route>
                <Route path="new-todo" element={"coming soon"} ></Route>                
                <Route path="edit/:todoId" element={"coming soon"} ></Route>
                <Route path="delete/:todoId" element={"coming soon"} ></Route>
            </Route>
        </Routes>
    );
};

export default Router;