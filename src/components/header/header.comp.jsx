import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import './header.styles.scss';

const HeaderComp = ({getNavVisibilityClass, history}) => {
	const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
	console.log('HeaderComp', history);
	const {pathname} = history.location;

	const getClassName = path => {
		return path === pathname ? 'nav-link active' : 'nav-link';
	};

	const onMenuClick = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<nav className={`header nav bg-secondary ${getNavVisibilityClass()}`}>
			<div className="nav nav-horizontal">
				<Link to={{pathname: '/', state: {firstLoad: false}}} className={getClassName('/')}>0. Home</Link>
				<Link to="/about" className={getClassName('/about')}>1. About</Link>
				<Link to="/skills" className={getClassName('/skills')}>2. Skills</Link>
				<Link to="/works" className={getClassName('/works')}>3. My Works</Link>
				<Link to="/contact" className={getClassName('/contact')}>4. Contact</Link>
			</div>
			<button className={`nav-link menu text-success hamburger hamburger--collapse ${isNavbarOpen ? 'is-active' : ''}`} type="button" aria-label="Menu" aria-controls="navigation" aria-expanded={!isNavbarOpen ? 'true' : 'false'} onClick={onMenuClick}>
				<span className="hamburger-box">
					<spam className="hamburger-inner" />
				</span>
			</button>
			<div id="navigation" className={`navigation nav-vertical ${isNavbarOpen ? 'open' : ''}`}>
				<Link to={{pathname: '/', state: {firstLoad: false}}} className={getClassName('/')} onClick={onMenuClick}>0. Home</Link>
				<Link to="/about" className={getClassName('/about')} onClick={onMenuClick}>1. About</Link>
				<Link to="/skills" className={getClassName('/skills')} onClick={onMenuClick}>2. Skills</Link>
				<Link to="/works" className={getClassName('/works')} onClick={onMenuClick}>3. My Works</Link>
				<Link to="/contact" className={getClassName('/contact')} onClick={onMenuClick}>4. Contact</Link>
			</div>
		</nav>
	);
};

HeaderComp.propTypes = {
	getNavVisibilityClass: PropTypes.func.isRequired
};

export default withRouter(HeaderComp);
