// import packages/modules
import {React, StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get the container element from the html document
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// render the app in strict mode
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);