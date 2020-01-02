import React from 'react';
import PropTypes from 'prop-types';

import './skip-btn.styles.scss';

const SkipBtn = props => {
	const {isVisible, onClick} = props;
	return (
		isVisible ?
			<div className="skip-btn btn btn-outline-light btn-sm rounded pulsate-bck" onClick={onClick}>
				[SPACE-BAR] SKIP
			</div> : null
	);
};

SkipBtn.defaultProps = {
	isVisible: true
};

SkipBtn.propTypes = {
	isVisible: PropTypes.bool,
	onClick: PropTypes.func.isRequired
};

export default SkipBtn;
