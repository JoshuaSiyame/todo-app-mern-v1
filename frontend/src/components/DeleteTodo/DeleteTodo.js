// import modules/packages
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

// delete component
const DeleteTodo = () =>{
    // get the id
    const { todoId } = useParams();
    const navigate = useNavigate();

    // delete the todo
    let deleteTodo = async () =>{
        await axios.delete(`http://localhost:3000/todo/${todoId}`);
        navigate("/");
    };

    return (
        <div>
            <Link onClick={deleteTodo}>delete</Link>
        </div>
    )
}

export default DeleteTodo;