// import modules/packages
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// todo component
const SingleTodo = () => {
    // get the id submitted
    let { todoId } = useParams();

    // preview the id
    console.log(todoId);

    // create states
    const [todo, setTodo] = useState([]);

    // fetch the todo using axios based on the requested id
    let getTodo = async () => {
        let result = await axios.get(`http://localhost:3000/todo/${todoId}`);
        setTodo(result.data)
    };

    // run the function once component is called
    useEffect(() => {
        getTodo();
    }, []);

    return (
        <div className="main">
            <h2>Single Todo</h2>
            <h3>{todo.title+"    -author: "+ todo.author}</h3>
            <small>{todo.created}</small>
            <p>{todo.desc}</p>
        </div>
    );
};

export default SingleTodo;