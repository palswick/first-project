const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            // this._callSubscriber(this._state);
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            // this._callSubscriber(this._state);
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}


export default profileReducer;