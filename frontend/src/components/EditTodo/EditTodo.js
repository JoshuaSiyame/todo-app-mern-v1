// import modules/packages
import React from "react";


// edit todo component
const EditTodo = () =>{
    return (
        <div className="main">
            <h2>Edit Todo.</h2>
            <form id="edit-form">
                <div className="form-group">
                    <input type="text" placeholder="author" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="title" />
                </div>
                <div className="form-group">
                    <textarea name="" placeholder="description" />
                </div>
            </form>
        </div>
    );
};

export default EditTodo;