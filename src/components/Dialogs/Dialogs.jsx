import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let messageArea = React.useRef(null);

    let sendMessage = () => {
        let text = messageArea.current.value;
        // props.sendMessage(text);
        // props.dispatch({ type: 'SEND-MESSAGE', messageArea: text});
        let action = sendMessageActionCreator(text);
        props.dispatch(action);
    }

    let messageChange = () => {
        let text = messageArea.current.value;
        // props.updateNewMessageText();
        // props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.dialogsWrapper}>
            <div className={s.items}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <div className={s.sendMessageSection}>
                    <div>
                        <textarea onChange={messageChange} className={s.newMessageArea} ref={messageArea} value={props.dialogsPage.newMessageText} placeholder='Write a message ...'/>
                    </div>
                    <div>
                        <button className={s.button} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;