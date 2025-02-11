import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        console.log('this', this);
        return (
            <div>React App</div>
        )
    }
}

const mapStateProps = state => {
    console.log('state', state);

    return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateProps);

export default componentConnector(App);

