// import modules/packages
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import SingleTodo from "../../components/Todo/Todo";
import EditTodo from "../../components/EditTodo/EditTodo";
import NewTodo from "../../components/NewTodo/NewTodo";

// router component
const Router = () =>{
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } ></Route>
            <Route path="/todo">
                <Route path=":todoId" element={ <SingleTodo /> } ></Route>
                <Route exact path="new-todo" element={ <NewTodo />} ></Route>                
                <Route path="edit/:todoId" element={ <EditTodo /> } ></Route>
                <Route path="delete/:todoId" element={ "" } ></Route>
            </Route>
        </Routes>
    );
};

export default Router;