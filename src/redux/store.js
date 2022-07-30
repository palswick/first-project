import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Whats poppin', likesCount: 12},
                {id: 2, message: 'I am superman', likesCount: 7},
            ],
            newPostText: 'it-kamasutra'
        },

        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Arina',
                    avatar: 'https://sun9-82.userapi.com/s/v1/if2/mtGQmwnedOVMXbi5zfb6bhg7RAcPZyze6B9UlITSVmFRcVq1KPbDNTYNX67FNof2PMdN8lShlSNC2wkXlx5CFPyP.jpg?size=1519x1844&quality=96&type=album'
                },
                {id: 2, name: 'Stella', avatar: 'https://static.zerochan.net/Stella.%28Winx.Club%29.full.1322257.jpg'},
                {
                    id: 3,
                    name: 'Blum',
                    avatar: 'https://3.bp.blogspot.com/-SpMJdMRdQbQ/TlNSZmqqDaI/AAAAAAAACLg/TFIXwd-jT2c/s1600/244505bloom1.jpg'
                },
                {
                    id: 4,
                    name: 'Ihor',
                    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1583807/pub_5d3d3ff05ba2b500adc4be08_5d3d40a697216d00acd508ea/scale_1200'
                },
                {
                    id: 5,
                    name: 'Michael',
                    avatar: 'https://sun9-64.userapi.com/s/v1/ig2/U7NUajGGGCNpPO8PRLRgr4PAWfohM-mlqjuF_ffaZ3wwMsI0MeW5nGDhoaJ8QW2hahJKsqIoROiwcoUwSyVqp4Fp.jpg?size=1620x2160&quality=96&type=album'
                },
                {
                    id: 6,
                    name: 'Maria',
                    avatar: 'https://sun9-40.userapi.com/s/v1/ig2/5OVXtHUnsGbtNZD5HSCt0BTmUyUPIIffbJD2aQB9nBiLj08yqwlA_kQbnr9vN0yeHdq1L9qzeymZ3M6nn3F1MWYR.jpg?size=377x265&quality=96&type=album'
                }
            ],

            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'Hello bruh'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Wassup bro'},
                {id: 5, message: 'Michael'},
                {id: 6, message: 'Arina'},
            ],
            newMessageText: ''
        },

        sidebarFriendsList: [
            {
                id: 1,
                name: 'Arina',
                img: 'https://sun9-82.userapi.com/s/v1/if2/mtGQmwnedOVMXbi5zfb6bhg7RAcPZyze6B9UlITSVmFRcVq1KPbDNTYNX67FNof2PMdN8lShlSNC2wkXlx5CFPyP.jpg?size=1519x1844&quality=96&type=album'
            },
            {
                id: 2,
                name: 'Stella',
                img: 'https://static.zerochan.net/Stella.%28Winx.Club%29.full.1322257.jpg'
            },
            {
                id: 3,
                name: 'Blum',
                img: 'https://3.bp.blogspot.com/-SpMJdMRdQbQ/TlNSZmqqDaI/AAAAAAAACLg/TFIXwd-jT2c/s1600/244505bloom1.jpg'
            }
        ],
    },


    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarFriendsList = sidebarReducer(this._state.sidebarFriendsList, action)

        this._callSubscriber(this._state);
    },
}

export default store;




