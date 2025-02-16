import { combineReducers } from "redux";
import messageReducer from "./messsages";
import usernameReducer from "./username";

export default combineReducers({
    messages: messageReducer,
    username: usernameReducer
});