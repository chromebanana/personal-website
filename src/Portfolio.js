import React from 'react';
 const PortfolioItem = ({ date, role, title, location, detail, body }) => {
  return (
  		<div className="pv2">
  		<article className="ba ph4 pv2">
		<h3>{date}</h3>
		<h3>{role}</h3>
		<h2>{title}</h2>
		<h3>{location}</h3>
		<h4>{detail}</h4>
		{body}
		</article>	
  		</div>

    )
}


const Button = ({ text, active, onClick }) => {
  return(
 <a className={active ?  "f6 link ph3 pv2 mb2 dib black bg-white ba bw1 mr1 " :"f6 link ph3 pv2 mb2 dib white bg-black mr1 ba bw1 b--black bg-animate hover-bg-white hover-black"} onClick={onClick} href="#0">{text}</a>
  )
}


class Portfolio extends React.Component {
	constructor() {
		super();
		this.state = {
			category: 'Profesional'
		}
	}

	changePortfolioCategory = (event) => {
		let target = event.target
		console.log(target.text)
		this.setState({category: target.text})
		console.log(this.state.category)

	}

 render() {
 	return (
          <div>
          <Button
          text={'Profesional'} active={this.state.category==='Profesional'} onClick={this.changePortfolioCategory}/><Button text={'Qualifications'} active={this.state.category==='Qualifications'} onClick={this.changePortfolioCategory}/>
	      {this.state.category === 'Profesional' ?
	      <div>
	      <PortfolioItem date={'October 2019-present · 1 year 1 month'} 
	      	role={'Production Supervisor, Developer'}
	        title={'Tree Tents International'} 
	        location={'Brighton'} 
	        body={[<p>Core responsibility is to help the company simplify business processes and increase manufacturing capacity. Also assisting in product design and assembly. <strong>React, Python, Odoo, PostgreSQL, Ubuntu-server, Trello.</strong></p>,
	        <ul className="pl3">
	          <li>Identified, installed and adapted open source MRP/CRM software to simplify operations</li>
	          <li>Installed host server and facilitated transition to new system</li>
	          <li>Developing front-end sales and warehouse tools to interface with MRP system</li>
	        </ul>]} />
          <PortfolioItem date={'May 2017-September 2019 · 2 years 5 months'} 
          	role={'Consultant, Developer'}
            title={'Arrk Group'} 
            location={'Manchester'} 
            body={[<p>Software design, development and data analysis. Product research and business strategy. <strong>Swift, Kotlin, Python, SQL, AWS, PowerBI, CircleCI, JIRA.</strong> Achievements include:</p>,
             <ul className="pl3">
             <li>Instrumental in the design, delivery and continual development of a B2C lifestyle and finance platform, currently with 900,000+ users. Worked closely with two others to win the contract for this project worth several million pounds</li>
             <li>Helped design and implement a platform-wide analytics and data strategy</li>
             <li>Learnt new programming languages on the job and produced robust, fault-tolerant software-working across the stack and on multiple platforms</li>
             <li>Authored developer guides to ensure clean and consistent data in our pipeline</li>
             <li>Constantly collaborated with a geographically distributed and cross-cultural team. Favoured openness and encouraged a culture of consensus decision making</li>
             <li>Incorporated ethnographic research and user testing into a rapid value proposition design process. Used a clear, confident presentation style to update key stakeholders on a weekly basis and build trust in my team's methods</li>
             <li>Analysed platform data to answer the design team’s queries about user behaviour and debug problems that were trending on our support desk</li>
             <li>Conducted usability tests when new UI elements were introduced</li>
             <li>Facilitated regular workshops with customers and staff with a sensitivity towards individual needs - creating a space for collaboration and active participation</li>
             </ul>]} />
	      <PortfolioItem date={'Jan-March 2017 · 3 months'}
	      	role={'Technical Project Coordinator'} 
            title={'Brighton & Hove Energy Services'} 
            location={'Brighton'} 
            body={[<p>Graduate internship giving me a thorough understanding of the problems facing energy consumers and the need to disrupt and dis-aggregate the UK energy market.<strong> Excel, CiviCRM, Python, GIMP.</strong>  Achievements and responsibilies included:</p>,
            <ul className="pl3">
                <li>Analysed energy generation and consumption data from various renewable sources to feedback to customers</li>
            	<li>Researched and drafted project proposals</li>
            	<li>Maintained financial models</li>
            	<li>Coordinated contractors</li>
            	<li>Secured a customer and delivered an energy saving project</li>
            	<li>Produced customer and public facing infographics to communicate energy savings and investment value</li>
            </ul>]} />
           </div> : <div>
           <PortfolioItem date={'In Progress'} 
          	
            title={'Machine Learning by Stanford University'} 
            location={'Coursera, Online'} 
            body={[<p>Currently enjoying Andrew Ng's Machine Learning course on Coursera. Submitting my assignments in Python using Jupyter notebook. Thank you @dibgerge for <a href="https://github.com/dibgerge/ml-coursera-python-assignments" target="_blank" rel="noopener noreferrer">re-writing all the programming assignments in Python</a> <span role="img" aria-label="hands clasped">🙏</span>. I'm taking my time to comprehend and check proofs. I've missed writing equations.</p>,
             <p>Topics include regressions, neural networks, unsupervised learning, diagnostics and system design.</p>]} />
            <PortfolioItem date={'June-August 2018'} 
            title={'Blockchain Developer Program 2018'} 
            location={'Consensys Academy, Online'} 
            detail={'Grade: 76.1'}
            body={<p>Smart contract development and Ethereum fundamentals. 
                The course introduced key tools, security best practises and other aspects of dApp development. 
                <a href="https://github.com/chromebanana/battleships-ethereum"> My submission</a> enabled play (and betting) of turn-based games using the Ethereum blockchain. My smart contract was deployed to the Ropsten Test Network.</p>
             } />
             <PortfolioItem date={'2012-2018'} 
            title={'Master of Physics'} 
            location={'University of Sussex'} 
            detail={'First Class, MPhys (Hons)'}
            body={<ul className="pl3">
            	<li className="pv1">Received faculty award for 'Outstanding Improvement' in year 2 <span className="inline" role="img" aria-label="fire">🔥</span></li>
            	<li className="pv1">Excelled in the complex mathematics required by theoretical modules</li>
            	<li className="pv1">Routinely used Python for data analysis. Also sat a C++ module to study OOP</li>
            	<li className="pv1">Final year project was to design and build a PID control system for a laser: Circuit building, 32-bit microcontroller programming in C and creating a UI in Labview</li>
            	<li className="pv1">Developed solid experimental and analytical skills and a ruthless attention to detail</li>
            	<li className="pv1">Produced eloquently written reports in Latex. Awarded 95% for final year presentation</li>
            	<li className="pv1">Became adept at identifying relevant physical principles involved in a problem and employing mathematical techniques to reach a clear solution</li>
            	<li className="pv1">Audited modules on HCI and web development</li>
            	</ul>
             } />
             <PortfolioItem date={'2011-2012'} 
            title={'Physics Foundation Year'} 
            location={'University of Manchester'} 
            detail={'71.25% Average'}
             />
             <PortfolioItem date={'Jan-September 2011'} 
            title={'Polymaths - Certificate of the Institute of Mathematics and its Applications'} 
            location={'University of Bolton'} 
            
             />
             </div> }
         </div>

    );
 } 
}

export default Portfolio;