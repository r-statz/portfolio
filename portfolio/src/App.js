import React, { Component } from 'react';
import carrot from './carrot.svg';
import carrot2 from './carrot2.svg';
import carrot3 from './carrot3.svg';
import carrotBent from './carrotBent.svg';
import carrotBent2 from './carrotBent2.svg';
import carrotBent3 from './carrotBent3.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
          <img src={carrotBent2} className="App-carrot2" alt="carrot" />
          <img src={carrot} className="App-carrot3" alt="carrot" />
          <img src={carrotBent3} className="App-carrot" alt="carrot" />
        </div>
        <div className="row">
        <img src={carrotBent} className="App-carrot" alt="carrot" />
        <img src={carrot3} className="App-carrot3" alt="carrot" />
        <img src={carrot2} className="App-carrot2" alt="carrot" />
      </div>

          <p>
            PORTFOLIOHOLIO
          </p>
          <div
            className=""
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plant  Eater
          </div>
        </header>
      </div>
    );
  }
}

export default App;
