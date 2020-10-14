import React, { Component } from 'react';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import './App.css';

class App extends Component {
  render() {
 // TODO: https://en.wikipedia.org/wiki/Centrifugal_governor
  return (
    <div className="App mw7 w-90 ph3 pv4-l pv4-m center">
        <Router> 
          <Navigation />
          <BaseRouter/>
        </Router>
    
  </div>
  );
}
}

export default App;
