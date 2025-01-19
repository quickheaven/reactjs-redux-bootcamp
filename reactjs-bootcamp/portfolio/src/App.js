import React, { Component } from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regulaClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {

    render() {
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Arjie. I'm a software developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
            </div>
        )
    }
}

export default App;


