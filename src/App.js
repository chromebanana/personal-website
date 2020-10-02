import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { PortfolioItem } from './Portfolio';

import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    route: 'home',
  }
  }

onRouteChange = (route) => {
  this.setState({route: route});
}


  render() {
    const { route } = this.state;
 // TODO: https://en.wikipedia.org/wiki/Centrifugal_governor
  return (
    <div className="App">
    <Navigation onRouteChange={this.onRouteChange}/>
      {this.state.route === 'home' ?
        <div>
        <h1>William Cragg</h1>
        <h2>Full Stack Developer</h2>
        </div>
        : ( route === 'bio' ? <div>
          <h2>About Me</h2><p>
          Hard-working team player motivated by technology's capacity to accelerate social and environmental change. Physicist with diverse experience in software design and full stack development. Strong qualitative and quantitative research tool-set. Mostly using Python and React. I also human very well.</p>
          <h2>Tools & Technical Skills</h2><p>React, Python, Swift, Data Analysis, AWS, Smart Contracts, Machine Learning, Embedded Software</p>
          <h2>Human Skills</h2><p>Workshop facilitation, Design thinking, Conflict resolution, Free-association narrative interviews, open, honest and direct.</p>
          <h2>Interests</h2><p>Federeated Learning, Baysian Inference, Data Fusion, DLTs, Design Theory, Generative Art, Multi-Agent Systems</p>
          </div> 
        : ( route === 'portfolio' ? <div><PortfolioItem title={'arrk'} /></div> 
        : ( route === 'contact' ? <div><p>contact</p></div> : <div><p>home</p></div> 
        )))
      }
      </div>
  );
}
}


export default App;
