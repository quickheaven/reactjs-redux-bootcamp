import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";

// The function keyword creates a special this object that refers to the object where it was declared and the arrow function does not such thing.
function App() {
// const App = () => {

  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  }

  const updateUserQuery = event => {    
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  }

  return (
    <div className="App">
      <h1>Hello Arjie</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
