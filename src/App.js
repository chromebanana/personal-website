import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { PortfolioItem } from './Portfolio';

import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    route: 'portfolio',
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

    <div className="mw7 ph3 center">
        <Navigation onRouteChange={this.onRouteChange}/>

      {this.state.route === 'home' ?
        <div>
        <h1>William Cragg</h1>
        <h2>Full Stack Developer</h2>
        </div>
        : ( route === 'bio' ? <div>
          <h2>About Me</h2><p>
          Enthusiastic team player motivated by technology's capacity to accelerate social and environmental change. Physicist with diverse experience in software design and full stack development. Strong qualitative and quantitative research tool-set. Mostly using Python and React. I also human very well.</p>
          <h2>Tools & Technical Skills</h2><p>React, Python, Swift, Data Analysis, AWS, Smart Contracts, Machine Learning, Embedded Software, Control Systems</p>
          <h2>Human Skills</h2><p>Workshop facilitation, Design thinking, Conflict resolution, Free-association narrative interviews, open, honest and direct.</p>
          <h2>Interests</h2><p>Federeated Learning, Baysian Inference, Data Fusion, DLTs, Design Theory, Generative Art, Multi-Agent Systems, Wallace & Gromit</p>
          </div> 
        : ( route === 'portfolio' ? 
          <div>
                  <PortfolioItem date={'October 2019-present'} 
                    title={'Tree Tents International'} 
                    location={'Brighton'} 
                    body={['Core responsibility is to help the company simplify business processes and increase manufacturing capacity. Also assisting in product design and assembly. Achievements include:',
                    <ul>
                      <li>Identified, installed and adapted open source MRP/CRM software to simplify operations.</li>
                      <li>Installed host server and facilitated transition to new system.</li>
                    </ul>]} />
          <PortfolioItem date={'May 2017-September 2019'} 
                    title={'Arrk Group'} 
                    location={'Manchester'} 
                    body={['Software design, development and data analysis. Product research and business strategy. Swift, Kotlin, Python, SQL, PowerBI, AWS, Jenkins, JIRA. Achievements include:',
                     <ul>
                     <li>Instrumental in the design, delivery and continual development of a B2C lifestyle and finance platform, currently with 900,000+ users. Worked closely with two others to win the contract for this project worth several million pounds.</li>
                     <li>Helped design and implement a platform-wide analytics and data strategy.</li>
                     <li>Constantly collaborated with a geographically distributed and cross-cultural team. Favoured openness and encouraged a culture of consensus decision making.</li>
                     <li>Incorporated ethnographic research and user testing into a rapid value proposition design process. Used a clear, confident presentation style to update key stakeholders on a weekly basis and build trust in my team's methods.</li>
                     <li>Learnt new programming languages on the job and produced production-ready code - often working on multiple platforms at once.</li>
                     <li>Facilitated regular workshops with customers and staff - creating a space for collaboration and active participation with a sensitivity towards the needs of individual participants.</li>
                     </ul>]} />
                              <PortfolioItem date={'Jan--March 2017'} 
                    title={'Brighton \& Hove Energy Services'} 
                    location={'Brighton'} 
                    body={['Graduate intern responsible for lead generation, researching and drafting project proposals, maintaining financial models in Excel, coordinating and invoicing contractors, analysis and communication of energy generation data.']} />
                     </div>



        : ( route === 'contact' ? <div><p>contact id also love feed back on this website/any usabiltiy issues responsiveness</p></div> : this.setState({route: 'home'}) 
        )))
      }
      </div> 
      </div>
  );

}
}


export default App;
