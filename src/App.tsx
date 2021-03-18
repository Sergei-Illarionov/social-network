import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStateType} from "./redux/state";

type AppPropsType = {
    state: AppStateType
}


function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                           />}/>
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
