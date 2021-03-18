import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type dialogsPropsType ={
    state: DialogsPageType
}



const Dialogs = (props:dialogsPropsType) => {
let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;