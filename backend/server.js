// import required modules/packages
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// import routes
const appRoutes = require("./routes/routes");

// dotenv configurations
dotenv.config();

// connection to database based on the mode of env
mongoose.set("strict", true);
if(process.env.MODE === "development"){
    console.log(`MODE: ${process.env.MODE}`);
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.error("Failed to connect to Database", err);
    });
}else{
    console.log("Not in production for now");
};

// app instance
const app = express();

// app configurations
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5000",
    allowedHeaders: ["*"],
    credentials: true
}));

// routes configurations
app.use("/", appRoutes);

// server instance
const server = http.createServer(app);

server.listen(process.env.PORT, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`);
});