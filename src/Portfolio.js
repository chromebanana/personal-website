import React from 'react';
// className="pa2 ma2 bg-green" variant='primary'
export const PortfolioItem = ({ date, title, location, body }) => {
  return (
			<div>
		<h3>{date}</h3>
		<h2>{title}</h2>
		<h3>{location}</h3>
		<p>{body}</p>

		</div>
    )
}
