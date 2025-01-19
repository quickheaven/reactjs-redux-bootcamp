import React, { Component } from 'react';

/*
class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regulaClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);
*/

class App extends Component {

    constructor() {
        super();
        this.state = { displayBio: false };
        /*
         * not ideal.
        this.readMore = () => {
            
        }
        */
        // this.readMore = this.readMore.bind(this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    /*
    readMore() {
        //this.state.displayBio = true; // not ideal. use this.setState()
        this.setState({ displayBio: true });
    }

    showLess() {
        this.setState({ displayBio: false });
    }
    */
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Arjie. I'm a software developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Toronto, and code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Beside coding, I also love RTS games and ramen!</p>
                            <div>
                                <button onClick={this.toggleDisplayBio}>Show Less</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;


