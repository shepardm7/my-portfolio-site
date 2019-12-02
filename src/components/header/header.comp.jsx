import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';

const HeaderComp = ({getNavVisibilityClass, history}) => {
	console.log('HeaderComp', history);
	const { pathname } = history.location;

	const getClassName = path => {
		return path === pathname ? 'nav-link active' : 'nav-link';
	};

	return (
		<nav className={`nav bg-secondary ${getNavVisibilityClass()}`}>
			<Link to={{pathname: '/', state: {firstLoad: false}}} className={getClassName('/')}>0. Home</Link>
			<Link to="/about" className={getClassName('/about')}>1. About</Link>
			<Link to="/skills" className={getClassName('/skills')}>2. Skills</Link>
			<Link to="/works" className={getClassName('/works')}>3. My Works</Link>
			<Link to="/contact" className={getClassName('/contact')}>4. Contact</Link>
		</nav>
	);
};

HeaderComp.propTypes = {
	getNavVisibilityClass: PropTypes.func.isRequired
};

export default withRouter(HeaderComp);
