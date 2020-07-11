import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
