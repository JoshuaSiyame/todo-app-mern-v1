// import packages/modules
import React from "react";
import { BrowserRouter } from "react-router-dom"
import "./App.css";
import Header from "./utils/Header/Header";
import Footer from "./utils/Footer/Footer";
import Router from "./utils/Router/Router";

// app component
const App = () => {
    return (
        <BrowserRouter>
            <div id="main-app">
                <Header />
                    <Router />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;