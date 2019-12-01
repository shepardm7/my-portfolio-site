import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import Typewriter from 'typewriter-effect';

import './home.styles.scss';

class HomePage extends Component {
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
			shouldShowOptions: false
		}
	}

	componentDidMount() {
		// this.typed = new Typed(this.refTypedTextElement, this.typeOptions);
	}

	componentWillUnmount() {
		// this.typed.destroy();
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
			.typeString('I\'m a Web/Android developer.')
			.pauseFor(2000)
			.deleteAll(0)
			.typeString('<b>THANK YOU</b> for visiting my website.')
			.pauseFor(1000)
			.deleteAll(1)
			.changeDelay(60)
			.typeString('To navigate the website you may either press the <em>number key</em> associated ' +
				'with the option or click the options on the <em>nav bar</em> on top...<br>')
			.pauseFor(700).changeCursor(' ')
			.callFunction(() => {
				this.setState({ shouldShowOptions: true });
			})
			.start();
	};

	onOptionsTypeWriterInit = typewriter => {
		typewriter.changeDelay(40).changeCursor('_')
			.typeString('1. Get to know me<br>').pauseFor(500)
			.typeString('2. My works<br>').pauseFor(200)
			.typeString('3. Get in touch<br>').pauseFor(200)
			.typeString('4. Conclusion')
			.start()
	}

	render() {
		const { shouldShowOptions } = this.state;
		return (
			<div className="home-page container">
				<div className="typed-text-container">
					{/*<span id="typed-strings" ref={el => this.refTypedStrings = el}>*/}
					{/*	<p>Hello, world!!!</p>*/}
					{/*	<p>I&apos;m Sateek Roy.</p>*/}
					{/*	<p><b>THANK YOU</b> for visiting my website...</p>*/}
					{/*	<p>Something more</p>*/}
					{/*	<p>something more 2</p>*/}
					{/*</span>*/}
					<div className="typed-text text1 h2">
						{/*<div className={`typed-text text1 h2 ${isTextSelected ? 'bg-white text-dark' : ''}`} ref={el => this.refTypedTextElement = el}>*/}
						
						{/*</div>*/}
						{/*<div className="typed-text text2 h2" ref={el => this.refTypedTextElement2 = el}/>*/}
						<Typewriter onInit={(typewriter) => this.onTypewriterInit(typewriter)} />
					</div>
					{ shouldShowOptions ? <div className="typed-text options-text h3 text-left">
						<Typewriter onInit={typewriter => this.onOptionsTypeWriterInit(typewriter)} />
					</div> : null}
				</div>
			</div>
		);
	}
}

HomePage.defaultProps = {
	stringIndex: 0
};

HomePage.propTypes = {
	stringIndex: PropTypes.number
};

export default HomePage;
