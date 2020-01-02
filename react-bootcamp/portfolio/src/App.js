import React, { Component } from "react";

class App extends Component {

    constructor() {
        super();
        this.state = { displayBio: false };

        this.toggleDispalyBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        //this.state.displayBio = !this.state.displayBio; // Bad practice! Never Directly Modify State
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Ajie. I'm a application developer</p>
                <p>I'm always looking forward to working on a meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Toronto, and code every day.</p>
                            <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love music and ramen!</p>
                            <button onClick={this.toggleDispalyBio}>Show less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDispalyBio}>Read more</button>
                            </div>
                        )
                }
            </div>)
    }

}

export default App;