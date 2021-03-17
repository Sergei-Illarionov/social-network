import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                <div><NavLink to="/dialogs/1">Dimych</NavLink> </div>
                <div><NavLink to="/dialogs/2">Dimych</NavLink> </div>
                <div><NavLink to="/dialogs/3">Dimych</NavLink> </div>

            </div>

            <div className={style.messages}>
                <div className="message">Hi</div>
                <div className="message">How are your</div>
                <div className="message">Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;