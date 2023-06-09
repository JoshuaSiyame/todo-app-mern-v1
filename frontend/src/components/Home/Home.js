// import modules/packages
import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

// home component
const Home = () =>{

    // set states 
    const [todos, setTodos] = useState([]);

    // function to get the todos
    async function Todos(){
        try {
            // get the todos
            const todos = await axios.get("http://localhost:3000/");
            setTodos(todos.data);
        } catch (err) {
            console.error(err);
        };
    };

    useEffect(()=>{
        Todos();
    }, []);
        
    return (
        <div className="main">
            <h2>Todos.</h2>
            <ul>
                {
                    todos.map(todo=>(
                        <li key={todo.id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.desc}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Home;