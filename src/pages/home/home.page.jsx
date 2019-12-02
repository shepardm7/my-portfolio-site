import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Context } from '../../Context';
import Typed from 'typed.js';
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';


import './home.styles.scss';
import {actionType} from '../../ActionTypes';

class HomePage extends Component {
	static contextType = Context;
	constructor(props, context) {
		super(props, context);

		this.strings = [
			'Hello, World!!!',
			'I\'m Sateek Roy.^1000\n Thank you for visiting my website',
		];
		this.typeOptions = {
			// strings: this.strings,
			stringsElement: '#typed-strings',
			typeSpeed: 60,
			backSpeed: 30,
			showCursor: false,
			fadeOut: true,
			smartBackspace: false,
			autoInsertCss: false,
			backDelay: 1000,
			onStringTyped: this.handleOnStringTyped,
			preStringTyped: this.handlePreStringTyped,
			onStart: this.handlePreStringTyped
		};
		this.refTypedStrings = null;
		this.refTypedTextElement = null;
		this.refTypedTextElement2 = null;
		this.state = {
			isTextSelected: false,
			shouldShowOptions: false,
			shouldShowArrow: false,
			isCompletelyLoaded: false
		}
	}

	componentDidMount() {
		// this.typed = new Typed(this.refTypedTextElement, this.typeOptions);
		console.log('Homepage', this.context);
		console.log('Homepage', this.props);

		this.context.dispatch(actionType.setShowSkip, true);
		this.context.dispatch(actionType.setOnSkip, () => {
			this.props.setNavVisibility(true);
			this.setState({shouldShowArrow: false, isCompletelyLoaded: true});
		});
	}

	componentWillUnmount() {
		// this.typed.destroy();
		this.context.dispatch(actionType.resetState);
	}

	handlePreStringTyped = (pos, self) => {
		console.log('pre string typed called');
		this.refTypedTextElement.classList.remove('bg-light');
	};

	handleOnStringTyped = (pos, self) => {
		console.log(pos, self);
		this.refTypedTextElement.classList.add('bg-light');
	};
	
	onTypewriterInit = (typewriter) => {
		typewriter.changeDelay(40).changeDeleteSpeed(1).changeCursor('_')
			.typeString('Hello, world!!!<br>')
			.pauseFor(700)
			// .deleteAll()
			.typeString('My name is <em class="text-success">Sateek Roy</em>...<br>')
			.pauseFor(400)
			.typeString('I\'m a Web developer')
			.pauseFor(100)
			.deleteChars(10)
			.typeString('/Android developer.')
			.pauseFor(2000)
			.deleteAll(0)
			.typeString('<b>THANK YOU</b> for visiting my website.')
			.pauseFor(1000)
			.deleteAll(1)
			.changeDelay(60)
			.typeString('<span class="h3">Select an option by pressing the associated <em class="text-success">number' +
				' key</em></span>')
			.pauseFor(700).changeCursor(' ')
			.callFunction(() => {
				this.setState({ shouldShowOptions: true });
			})
			.start();
	};

	onOptionsTypeWriterInit = typewriter => {
		typewriter.changeDelay(40).changeCursor('_')
			.typeString('<span class="text-success">1.</span> Get to know me<br>').pauseFor(500)
			.typeString('<span class="text-success">2.</span> My Skills<br>').pauseFor(200)
			.typeString('<span class="text-success">3.</span> My works<br>').pauseFor(200)
			.typeString('<span class="text-success">4.</span> Get in touch<br>').pauseFor(200)
			.typeString('<span class="text-success">9.</span> Hide nav bar')
			.callFunction(() => {
				this.props.setNavVisibility(true);
				this.context.dispatch(actionType.setShowSkip, false);
				this.context.dispatch(actionType.setOnSkip, () => {})
			})
			.changeCursor(' ')
			.start()
	};

	getTextContainer = () => {
		const { isCompletelyLoaded, shouldShowOptions } = this.state;
		if (isCompletelyLoaded) {
			return (
				<div className="typed-text-container">
					<div className="typed-text text1 h3">
						Select an option by pressing the associated <em className="text-success">number key</em>
					</div>
					<div className="typed-text options-text h3 text-left">
						<span className="text-success">1.</span> Get to know me<br/>
						<span className="text-success">2.</span> My Skills<br/>
						<span className="text-success">3.</span> My Works<br/>
						<span className="text-success">4.</span> Get in touch<br/>
						<span className="text-success">9.</span> Hide nav bar<br/>
					</div>
				</div>
			)
		}
		return (
			<div className="typed-text-container">
				<div className="typed-text text1 h2">
					<Typewriter onInit={(typewriter) => this.onTypewriterInit(typewriter)} />
				</div>
				{ shouldShowOptions ? <div className="typed-text options-text h3 text-left">
					<Typewriter onInit={typewriter => this.onOptionsTypeWriterInit(typewriter)} />
				</div> : null}
			</div>
		)
	}

	render() {
		const { shouldShowOptions, shouldShowArrow, isCompletelyLoaded } = this.state;
		return (
			<div className="home-page container" onKeyUp={ e => this.onKeyUp(e)}>
				{/*{ shouldShowArrow ? <FontAwesomeIcon icon={faArrowUp} className="h1 up-arrow fade-in-bottom  "/> : null }*/}
				{ this.getTextContainer() }
			</div>
		);
	}
}

HomePage.defaultProps = {
	firstLoad: true
};

HomePage.propTypes = {
	showNav: PropTypes.func,
	setNavVisibility: PropTypes.func,
	stringIndex: PropTypes.number,
	firstLoad: PropTypes.bool
};

export default HomePage;
