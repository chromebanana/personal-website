import React, { Component } from 'react';
import { Navigation } from './Navigation';
import Portfolio from './Portfolio';
import { Contact } from './Contact';

import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        route: 'home'
      }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    const { route } = this.state;
 // TODO: https://en.wikipedia.org/wiki/Centrifugal_governor
  return (
    <div className="App mw7 w-90 ph3 pv4 center">
        <Navigation onRouteChange={this.onRouteChange}/>

      {this.state.route === 'home' ?
        <div>
        <h1>William Cragg</h1>
        <h2>Full Stack Developer.</h2>
        
        </div>
        : ( route === 'bio' ? <div>
          <h2>About Me</h2><p>
          Enthusiastic team player pursuing a career at the intersection of AI and sustainability.
          I'm motivated by technology's capacity to accelerate social and environmental change. 
          I'd like to work in a high performance organisation focused on solving societally important problems. 
          A job that allows me to flex my mathematics muscles is a must <span role="img" aria-label="muscle flex">💪</span>.</p>
           <strong> I'm particularly interested in working on industrial scale applications of privacy-preserving machine learning, data fusion or multi-agent modelling.</strong> 
          <ul className="pl3">
            <li>I'm a physicist with experience in all aspects of software production.</li>
            <li>Strong qualitative and quantitative research tool-set.</li>
            <li>Thorough, diligent and thoughtful.</li>
            <li>Mostly using Python and React.</li>
          </ul>
          <h2>Tools & Technical Skills</h2>
          <p className="mb1">With profesional experience: Python, React, Swift, SQL, Data Analysis and Reporting, AWS, Git.</p>
          <p className="mt0">Academic and hobby: C, C++, Machine Learning, Smart Contracts, Systems Thinking, 32-bit microcontrollers, TouchDesigner, Processing.</p>
          <h2>Human Skills</h2><p>Workshop facilitation, design thinking, free-association narrative interviews, clear and confident presentation style, kind, honest and direct.</p>
          <h2>Relevant Interests</h2><p>Federeated Learning, Data Fusion using Baysian Inference, DLTs, Design Theory, Generative Art, Multi-Agent Systems, Cooperatives, Power Dynamics, Non-violent Communication, Wallace & Gromit.</p>
          </div> 
        : ( route === 'portfolio' ? 
          <Portfolio/>
        : ( route === 'contact' ? <Contact /> : this.setState({route: 'home'}) 
        )))
      }      
      </div>
  );
}
}

export default App;
