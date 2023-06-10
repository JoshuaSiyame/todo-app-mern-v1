// import modules/packages
import { React, useEffect, useState } from "react";
import {Link} from "react-router-dom";
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
                    todos.map((todo, i)=>(
                        <li key={i}>
                            <Link to={"/todo/"+todo._id}><h3>{todo.title}</h3></Link>                            
                            <p>{todo.desc}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Home;