// import modules/packages
import React, { useEffect, useState } from "react";
import "./EditTodo.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// edit todo component
const EditTodo = () => {

    // todo states
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState(""); 
    const [todo, setTodo] = useState([]);

    // set redirection
    const navigate = useNavigate();

    // get the todo id
    const { todoId } = useParams();
    // preview the todoId
    // console.log(todoId);

    // function to get the todo
    let getTodo = async () =>{
        const result = await axios.get(`http://localhost:3000/todo/${todoId}`)
        setTodo(result.data);
    };

    // use effect call
    useEffect(()=>{
        getTodo();
    }, []);

    // control the form 
    let editForm = async (e) =>{
        e.preventDefault();

        try {
            // construct data of the todo to be edited
            const todoEdit = {
                author,
                title,
                desc
            };

            // send the data using axios to the backend
            await axios.put(`http://localhost:3000/todo/${todoId}`, todoEdit);

            // redirect to the todo
            navigate(<EditTodo />);

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="main">
            <h2>Edit Todo.</h2>
            <form id="edit-form" onSubmit={editForm}>
                <div className="form-group">
                    <label className="label-control">Author</label>
                    <input name="author" type="text" placeholder={todo.author} className="form-control" onChange={(e)=>setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="label-control">Title</label>
                    <input name="title" placeholder={todo.title} type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="label-control">Description</label>
                    <textarea name="desc" placeholder={todo.desc} className="form-control" onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-primary">update</button>
                </div>
            </form>
        </div>
    );
};

export default EditTodo;