import React from 'react';
// className="pa2 ma2 bg-green" variant='primary'
 const PortfolioItem = ({ date, role, title, location, body }) => {
  return (
  		<div className="pv2">
  		<article className="ba ph4 pv2">
		<h3>{date}</h3>
		<h3>{role}</h3>
		<h2>{title}</h2>
		<h3>{location}</h3>
		<p className="">{body}</p>
		</article>	
  		</div>

    )
}

export const Portfolio = ({ }) => {
  return (
          <div>
	      <PortfolioItem date={'October 2019-present'} 
	      	role={'Production Supervisor, Developer'}
	        title={'Tree Tents International'} 
	        location={'Brighton'} 
	        body={[<p>Core responsibility is to help the company simplify business processes and increase manufacturing capacity. Also assisting in product design and assembly. <strong>React, Python, Odoo, Ubuntu-server, Trello.</strong></p>,
	        <ul>
	          <li>Identified, installed and adapted open source MRP/CRM software to simplify operations.</li>
	          <li>Installed host server and facilitated transition to new system.</li>
	          <li>Developing front-end sales and warehouse tools to interface with MRP system.</li>
	        </ul>]} />
          <PortfolioItem date={'May 2017-September 2019'} 
          	role={'Consultant, Developer'}
            title={'Arrk Group'} 
            location={'Manchester'} 
            body={[<p>Software design, development and data analysis. Product research and business strategy. <strong>Swift, Kotlin, Python, SQL, AWS, PowerBI, CircleCI, JIRA.</strong> Achievements include:</p>,
             <ul>
             <li>Instrumental in the design, delivery and continual development of a B2C lifestyle and finance platform, currently with 900,000+ users. Worked closely with two others to win the contract for this project worth several million pounds.</li>
             <li>Helped design and implement a platform-wide analytics and data strategy.</li>
             <li>Constantly collaborated with a geographically distributed and cross-cultural team. Favoured openness and encouraged a culture of consensus decision making.</li>
             <li>Incorporated ethnographic research and user testing into a rapid value proposition design process. Used a clear, confident presentation style to update key stakeholders on a weekly basis and build trust in my team's methods.</li>
             <li>Learnt new programming languages on the job and produced production-ready code - often working on multiple platforms at once.</li>
             <li>Facilitated regular workshops with customers and staff - creating a space for collaboration and active participation with a sensitivity towards individual needs.</li>
             </ul>]} />
	      <PortfolioItem date={'Jan--March 2017'}
	      	role={'Technical Project Coordinator'} 
            title={'Brighton \& Hove Energy Services'} 
            location={'Brighton'} 
            body={[<p>Graduate internship.<strong> Excel, CiviCRM, Python, GIMP.</strong>  Achievements and responsibilies included:</p>,
            <ul>
            	<li>Researched and drafted project proposals.</li>
            	<li>Maintained financial models.</li>
            	<li>Coordinated contractors.</li>
            	<li>Analysed and reported energy generation data.</li>
            	<li>Secured a customer and delivered an energy saving project.</li>
            	<li>Produced customer and public facing infographics to communicate energy savings and investment value.</li>
            </ul>]} />
         </div>

    )
}
