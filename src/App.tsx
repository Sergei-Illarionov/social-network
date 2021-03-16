import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";





function App() {

    return (

        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">

            </div>
        </div>

    );
}

export default App;
