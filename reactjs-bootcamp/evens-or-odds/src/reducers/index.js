import settingsReducer from "./settings";
import deckReducer from "./decks";
import gameStateReducer from "./gameState";

export default {
    deck: deckReducer,
    settings: settingsReducer,
    gameState: gameStateReducer
};
