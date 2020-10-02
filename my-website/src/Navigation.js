import React from 'react';
// className="pa2 ma2 bg-green" variant='primary'
export const Navigation = ({ onRouteChange }) => {
  return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		<p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
		<p onClick={() => onRouteChange('bio')} className='f3 link dim black underline pa3 pointer'>About</p>
		<p onClick={() => onRouteChange('portfolio')} className='f3 link dim black underline pa3 pointer'>Portfolio</p>
		<p onClick={() => onRouteChange('contact')} className='f3 link dim black underline pa3 pointer'>Contact Me</p>

		</nav>
    )
}



