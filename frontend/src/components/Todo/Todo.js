// import modules/packages
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <h3>{todo.title} <small>by:-</small> {todo.author}</h3>
            <small>{todo.created}</small>
            <p>{todo.desc}</p>
            <Link to={`/todo/edit/${todo._id}`}>Edit</Link>
            <Link to={`/delete/${todo._id}`}>delete</Link>
        </div>
    );
};

export default SingleTodo;