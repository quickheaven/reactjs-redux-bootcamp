import { combineReducers } from "redux";
import messageReducer from "./messsages";

export default combineReducers({
    messages: messageReducer
});