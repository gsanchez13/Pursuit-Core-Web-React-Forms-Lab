import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className="App">
        <h1>Enter each number in the array, separated by a ',' </h1>
        <form><select>
          <option></option>
          <option>sum</option>
          <option>average</option>
          <option>mode</option>
        </select>
        <button>Calculate</button>
        </form>
        </div>
    );
  }
}

export default App;