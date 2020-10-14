import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
			<nav  className="mw7 pv3 mh0 db tr">
		<p className='dim black underline f3 dib ml3 pointer mv2'><Link to="/">Home</Link></p>
		<p className='link dim black underline f3 dib ml3 pointer mv2'><Link to="/about">About</Link></p>
		<p className='link dim black underline f3 dib ml3 pointer mv2'><Link to="/portfolio">Portfolio</Link></p>
		<p className='link dim black underline f3 dib ml3 pointer mv2'><Link to="/contact">Contact Me</Link></p>
		</nav>
    )
}



