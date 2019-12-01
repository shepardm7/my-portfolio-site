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
			<Link to={{pathname: '/', state: {firstLoad: false}}} className={getClassName('/')}>Home</Link>
			<Link to="/about" className={getClassName('/about')}>About</Link>
			<Link to="/skills" className={getClassName('/skills')}>Skills</Link>
			<Link to="/works" className={getClassName('/works')}>My Works</Link>
			<Link to="/contact" className={getClassName('/contact')}>Contact</Link>
		</nav>
	);
};

HeaderComp.propTypes = {
	getNavVisibilityClass: PropTypes.func.isRequired
};

export default withRouter(HeaderComp);
