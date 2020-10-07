import React from 'react';
// className="pa2 ma2 bg-green" variant='primary'
export const Navigation = ({ onRouteChange }) => {
  return (
			<nav  className="mw7 pv3 ph2 db tr">
		<p onClick={() => onRouteChange('home')} className='link dim black underline f3 dib mr3 pointer mv2'>Home</p>
		<p onClick={() => onRouteChange('bio')} className='link dim black underline f3 dib mr3 pointer mv2'>About</p>
		<p onClick={() => onRouteChange('portfolio')} className='link dim black underline f3 dib mr3 pointer mv2'>Portfolio</p>
		<p onClick={() => onRouteChange('contact')} className='link dim black underline f3 dib mr3 pointer mv2'>Contact Me</p>

		</nav>
    )
}



