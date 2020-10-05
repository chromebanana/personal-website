import React from 'react';
// className="pa2 ma2 bg-green" variant='primary'
export const PortfolioItem = ({ date, title, location, body }) => {
  return (
  		<div className="pv2">
  		<article className="ba ph4 pv2">
		<h3>{date}</h3>
		<h2>{title}</h2>
		<h3>{location}</h3>
		<p className="">{body}</p>
		</article>	
  		</div>

    )
}
