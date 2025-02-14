import { SET_GUESS, SET_GAME_STARTED } from "../actions/types";

const DEFAULT_GAME_STATE = { guess: '' };

const gateStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch (action.type) {
        case SET_GUESS:
            return { ...state, guess: action.guess };
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;    
        default:
            return state;
    }
}

export default gateStateReducer;