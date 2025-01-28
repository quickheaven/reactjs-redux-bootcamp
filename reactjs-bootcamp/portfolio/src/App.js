import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'
import Title from './TItle';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Arjie. </p>
                <Title />
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
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>            
        )
    }    
}

export default App;


