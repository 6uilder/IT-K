import { combineReducers, createStore } from "redux";
import authReducer from "./auth_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;




