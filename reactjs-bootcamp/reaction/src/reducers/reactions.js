import { useActionState } from "react";
import { REACTION_OBJECTS } from "../actions/types";

const REACTION_TYPES = REACTION_OBJECTS.map(
    REACTION_OBJECT => REACTION_OBJECT.type
);

const reactionsReducer = (state = {}, action) => {
    if (REACTION_TYPES.includes(action.type)) {
        const { messageId } = action.item;

        const messageReactions = state[messageId];

        if (messageReactions) {
            // return an object with all the current state mixed in.
            // since message ID is variable, surround that key with a pair of brackets.
            // the idea is we want to mix in all the current message reactions for that message.
            return { ...state, [messageId]: [...messageReactions, action.item] }
        }
        return { ...state, [messageId]: [action.item] };
    }
    return state;

}

export default reactionsReducer;