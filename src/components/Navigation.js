import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
			<nav  className="mw7 pv3 mh0 db tr">
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/">Home</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/about">About</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/portfolio">Portfolio</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/contact">Contact Me</Link>
		</nav>
    )
}



