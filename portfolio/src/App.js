import React, { Component } from 'react'
import Design from './Design'
import About from './About'
import Contact from './Contact'
import Apps from './Apps'
import Footer from './Footer'
import carrot from './carrot.svg'
import  './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <img src={carrot} className="App-logo" alt="carrot" />
          </div>
          <div className="row">
          </div>
            <p>
            Enter if you Dare...
            </p>
        </header>
        <main>
          <Apps />
          <Design />
          <About />
          <Contact />
          <Footer />
        </main>
    </div>
    );
  }
}

export default App
