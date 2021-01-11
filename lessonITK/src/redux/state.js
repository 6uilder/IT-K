import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 3 },
                { id: 2, message: 'Nihao', likesCount: 13 },
                { id: 3, message: 'third', likesCount: 0 },
                { id: 4, message: 'bu', likesCount: 3 }
            ],
            newPostText: 'bajker'
        },
        dialogsPage: {
            dialogs: [
                { name: 'Dimon', id: 1 },
                { name: 'Dron', id: 2 },
                { name: 'Kolyan', id: 3 },
                { name: 'Marishka', id: 4 },
                { name: 'SerzhMorzh', id: 5 }
            ],
            messages: [
                { text: 'Hi', id: 1 },
                { text: 'Hey', id: 2 },
                { text: 'Yoohu', id: 3 }
            ],
            newMessageBody: ''
        }, 
        sidebar: {
            friends: [
                { name: 'Pushkin', id: '1' },
                { name: 'Tolstoy', id: '2' },
                { name: 'Fet', id: '3' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state is changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;