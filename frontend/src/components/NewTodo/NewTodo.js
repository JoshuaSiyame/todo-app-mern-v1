// import modules/packages
import React, { useEffect, useState } from "react";
import "./NewTodo.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// edit todo component
const NewTodo = () => {

    // todo states
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState(""); 
    
    // set redirection
    const navigate = useNavigate();

    // control the form 
    let newTodoForm = async (e) =>{
        e.preventDefault();

        try {
            // construct data of the todo to be edited
            const newTodo = {
                author,
                title,
                desc
            };

            // send the data using axios to the backend
            await axios.post("http://localhost:3000/new-todo", newTodo);

            // redirect to the todo
            navigate("/");

        } catch (error) {
            console.error(error)
        };
    };

    return (
        <div className="main">
            <h2>Create Todo.</h2>
            <form id="edit-form" onSubmit={newTodoForm}>
                <div className="form-group">
                    <label className="label-control">Author</label>
                    <input name="author" type="text" placeholder="author" className="form-control" onChange={(e)=>setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="label-control">Title</label>
                    <input name="title" placeholder="title" type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="label-control">Description</label>
                    <textarea name="desc" placeholder="description" className="form-control" onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
};

export default NewTodo;