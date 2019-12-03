import React from 'react';
import PropTypes from 'prop-types';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';
import Typewriter from 'typewriter-effect';


import './about.styles.scss';
import MyImg from '../../assets/me.jpg';

class AboutPage extends React.Component {
	static contextType = Context;
	state = {
		isCompletelyLoaded: false
	};

	componentDidMount() {
		const {dispatch} = this.context;
		dispatch(actionType.setShowSkip, true);
		dispatch(actionType.setOnSkip, () => {
			this.setState({
				isCompletelyLoaded: true
			});
		});
	}

	componentWillUnmount() {
		this.context.dispatch(actionType.resetState);
	}

	content = (
		<div className="typed-text h4">
			<span className="h2 text-title">A little about me...</span><p/>
			<span>
						I am <em className="text-success">Sateek Roy</em>. I am a developer from India, currently living in Toronto, Canada. After completing my
						Bachelors in <em>Computer Application</em> I came to Canada as a student to complete my post-graduate course in <em>Mobile Application Design and Development</em> from Lambton College. Right now I&apos;m working as a software developer
						in a company called <em>Beacontree Inc.</em>
					</span><p/>
			<span>
						I love programming and enjoy learning about new technologies and frameworks. In my free time I do research on various things.
					</span><p/>
			<span>Other things that I love doing are playing games, watching TV shows and a little bit of anime...</span>
		</div>
	);

	typeContent = (
		<div className="typed-text h4">
			<Typewriter onInit={t => {
				t.changeDelay(10).changeCursor('_').changeDeleteSpeed(1)
					.pauseFor(500)
					.typeString('<span class="h2 text-title">A little about me...</span><p/>')
					.pauseFor(200)
					.typeString('<span>' +
						'I am <em class="text-success">Sateek Roy</em>. I am a developer from India, currently living in Toronto,' +
						' Canada. After completing my' +
						'Bachelors in <em>Computer Application</em> I came to Canada as a student to complete my post-graduate course in <em>Mobile Application Design and Development</em> from Lambton College. Right now I&apos;m working as a software developer' +
						'in a company called <em>Beacontree Inc.</em>' +
						'</span><p/>')
					.pauseFor(100)
					.typeString('<span>' +
						'I love programming and enjoy learning about new technologies and frameworks. In my free time I do research on various things.' +
						'</span><p/>')
					.pauseFor(100)
					.typeString('<span>Other things that I love doing are playing games, watching TV shows and a little bit of' +
						' anime...</span>')
					.callFunction(() => {
						this.context.dispatch(actionType.setShowSkip, false);
						this.context.dispatch(actionType.setOnSkip, () => {});
					})
					.changeCursor(' ').start()
			}}/>
		</div>
	);

	render() {
		const { isCompletelyLoaded } = this.state;
		return (
			<div className="about-page">
				<div className="image-container slide-right">
					<div className="image image-effect" style={{backgroundImage: `url(${MyImg})`}} />
					<div className="image" style={{backgroundImage: `url(${MyImg})`}} />
				</div>
				{ isCompletelyLoaded ? this.content : this.typeContent }
			</div>
		);
	}
}

AboutPage.propTypes = {};

export default AboutPage;
