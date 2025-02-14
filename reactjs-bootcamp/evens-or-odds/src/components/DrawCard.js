import React from "react";
import { connect } from "react-redux";

const DrawCard = props => {
    console.log('DrawCard props', props);
    return (
        <div>
            <button>Draw next card!</button>
        </div>
    )
}

export default connect(
    // state => ({deck_id: state.deck.deck_id})
    ({ deck: { deck_id } }) => ({ deck_id })

)(DrawCard);