// import modules/packages
const express = require("express");
const Todo = require("../models/todo");

// router instance
const router = express.Router();

// endpoints
router.get("/test", (req, res)=>{
    res.send("welcome dev");
});

router.get("/", async (req, res)=>{
    try {
        // retrieve all todos frm the server
        const todos = await Todo.find({});
        if(todos.length === 0){
            return res.status(200).send("No todos now");
        }
        res.status(200).json(todos);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Something broke.!");
    };
});

router.get("/todo/:todoID", async (req, res)=>{
    try {
        // todo id
        const todoID = req.params.todoID;

        // retrieve a todo based on the requested id
        const todo = await Todo.findById(todoID);
        if(!todo){
            return res.status(404).send("Todo not found");
        };
        res.status(200).json(todo);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Something broke.!");
    };
});

router.post("/new-todo", async (req, res)=>{
    try {
        // object destructure
        const { author, title, desc } = req.body;

        // data validations
        if(!author || author.length === 0 || author === ""){
            return res.status(400).send("Author name is required");
        };
        if(!title || title.length === 0 || title === ""){
            return res.status(400).send("title is required");
        };
        if(!desc || desc.length === 0 || desc === ""){
            return res.status(400).send("description is required");
        };

        // check title if exists
        const todo = await Todo.findOne({ title });
        if(todo){
            return res.status(403).send("Activity with same name exists");
        };

        // create a new todo
        const newTodo = new Todo({
            author, title, desc
        });

        // preview todo before saving to db
        // console.log(newTodo);

        const savedTodo = await newTodo.save();

        res.status(201).send("Todo saved");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Something broke.!");
    };
});

router.put("/todo/:todoID", async (req, res)=>{
    try {        
        // check todo id if exists
        const todo = await Todo.findById(req.params.todoID);
        if(!todo){
            return res.status(403).send("Todo does not exist");
        };

        // object destructure
        const { author, title, desc } = req.body;

        // data validations
        if(author){
            if(!author || author.length === 0 || author === ""){
                return res.status(400).send("Author name is required");
            };
        };

        if(title){
            if(!title || title.length === 0 || title === ""){
                return res.status(400).send("Title is required");
            };
        };
        if(desc){
            if(!desc || desc.length === 0 || desc === ""){
                return res.status(400).send("Description is required");
            };
        };

        // create an update for todo
        const todoUpdates = {
            author, title, desc
        };

        // update the todo
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.todoID, todoUpdates);

        res.status(201).send("Todo updated");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Something broke.!");
    };
});

router.delete("/todo/:todoID", async (req, res)=>{
    try {
        // todo id
        const todoID = req.params.todoID;

        // retrieve a todo based on the requested id
        const todo = await Todo.findById(todoID);
        if(!todo){
            return res.status(404).send("Todo not found");
        };
        
        // delete the todo
        await Todo.findByIdAndDelete(todoID);

        res.status(200).send("Todo deleted");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Something broke.!");
    };
});

// export router instance
module.exports = router;