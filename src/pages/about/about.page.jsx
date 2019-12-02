import React from 'react';
import PropTypes from 'prop-types';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';

class AboutPage extends React.Component {
	static contextType = Context;
	componentDidMount() {
		const { dispatch } = this.context;
		dispatch(actionType.onDocumentKeyUp, key => {
			console.log('About page', key);
		});
	}

	componentWillUnmount() {
		this.context.dispatch(actionType.resetState);
	}

	render() {
		return (
			<div className="about-page container">
				About page
			</div>
		);
	}
}

AboutPage.propTypes = {

};

export default AboutPage;
