import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { Contact } from './pages/Contact';

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={Home} />
		<Route exact path='/about' component={About} />
		<Route exact path='/portfolio' component={Portfolio} />
		<Route exact path='/contact' component={Contact} />
	</div>
)

export default BaseRouter;