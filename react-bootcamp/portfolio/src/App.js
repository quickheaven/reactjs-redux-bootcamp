import React, { Component } from "react";
import Projects from './Projects';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
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
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more</button>
                            </div>
                        )
                }
                <hr/>
                <Projects />
            </div>)
    }
}

export default App;