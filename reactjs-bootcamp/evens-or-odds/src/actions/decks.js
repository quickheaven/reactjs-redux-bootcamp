import { FETCH_DECK_RESULT } from "./types";

export const fetchDeckResult = deckJson => {
    const { remaining, deck_id } = deckJson;

    return { type: FETCH_DECK_RESULT, remaining, deck_id };
}

export const fetchNewDeck = () => {
    return fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle')
        .then(response => response.json())
        .then(json => fetchDeckResult(json));
}