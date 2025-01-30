import React, { Component } from "react";

//const Joke = props => {
//    const {setup, punchline} = props.joke;

//const Joke = ({ joke }) => {
//    const { setup, punchline } = joke;
/*
const Joke = ({ joke: { setup, punchline } }) => {
    return <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>;
}
*/
const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)


class Jokes extends Component {

    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            // .then(response => { return response.json() });
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));
    }

    render() {
        // const { setup, punchline } = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    /*
                    // v1
                    this.state.jokes.map(joke => {
                        const { id, setup, punchline } = joke;
                        return <p key={id}>{setup} <em>{punchline}</em></p>
                    })
                    // v2    
                    this.state.jokes.map(joke => {return <Joke joke={this.state.joke} />})                        
                    */
                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))
                }
            </div>
        )
    }
}

export default Jokes;