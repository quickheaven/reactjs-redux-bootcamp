import React from "react";
import { connect } from "react-redux";
import { fetchDrawCard } from "../actions/decks";

const DrawCard = ({ deck_id, fetchDrawCard }) => {
    console.log('DrawCard deck_id', deck_id, ' fetchDrawCard ', fetchDrawCard);

    return (
        <div>
            <button onClick={fetchDrawCard(deck_id)}>Draw next card!</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return { 
        fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id)) 
    };
}



export default connect(
    // state => ({deck_id: state.deck.deck_id})
    ({ deck: { deck_id } }) => ({ deck_id }),
    mapDispatchToProps

)(DrawCard);