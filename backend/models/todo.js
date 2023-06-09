// import packages/modules
const mongoose = require("mongoose");

// todo schema instance
const todoSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        default: "Enter your description here."
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// model instance
const Todo = mongoose.model("todo", todoSchema);

// export model instance
module.exports = Todo;