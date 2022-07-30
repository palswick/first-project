const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.messageArea,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            // this._callSubscriber(this._state);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
           state.newMessageText = action.newText;
            // this._callSubscriber(this._state);
            return state;

        default:
            return state;
    }
}


export const sendMessageActionCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        messageArea: text
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default dialogsReducer;


