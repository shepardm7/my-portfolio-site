import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import './App.scss';
import {Context} from './Context';

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import HeaderComp from './components/header/header.comp';
import AnimatedBg from './components/animated-bg/animated-bg.comp';
import NotFoundPage from './pages/not-found/not-found.page';

class App extends React.Component {
	static contextType = Context;

	constructor(props, context) {
		super(props, context);
		this.context = Context;

		this.state = {
			shouldShowNav: {slideIn: false, firstTime: true}
		}
	}

	componentDidMount() {
		document.addEventListener('keyup', e => {
			console.log(this.context);
			this.context.onDocumentKeyUp(e.key);
		});
		if (this.props.history.location.pathname !== '/') {
			this.setState({ shouldShowNav: { slideIn: true, firstTime: false }});
		}
	}

	render() {
		const {shouldShowNav} = this.state;

		const getNavVisibilityClass = () => {
			if (!shouldShowNav.firstTime) {
				return shouldShowNav.slideIn ? 'slide-in' : 'slide-out';
			}
			return '';
		};

		const setNavVisibilityClass = isVisible => {
			this.setState({shouldShowNav: {slideIn: isVisible, firstTime: false}})
		};

		return (
			<div className="App">
				<AnimatedBg/>
				<HeaderComp getNavVisibilityClass={getNavVisibilityClass}/>
				<div className="page-container">
					<Switch>
						<Route exact path="/" render={props => <HomePage {...props} setNavVisibility={setNavVisibilityClass}/>}/>
						<Route path="/about" render={props => <AboutPage {...props} />}/>
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(App);
