import { combineReducers } from "redux";
import messageReducer from "./messsages";
import usernameReducer from "./username";
import reactionsReducer from "./reactions";

export default combineReducers({
    messages: messageReducer,
    username: usernameReducer,
    reactions: reactionsReducer
});