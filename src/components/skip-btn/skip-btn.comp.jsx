import React from 'react';
import PropTypes from 'prop-types';

import './skip-btn.styles.scss';

const SkipBtn = props => {
	const {isVisible} = props;
	return (
		isVisible ?
			<div className="skip-btn btn btn-outline-light btn-sm rounded pulsate-bck">
				[SPACE-BAR] SKIP
			</div> : null
	);
};

SkipBtn.defaultProps = {
	isVisible: true
};

SkipBtn.propTypes = {
	isVisible: PropTypes.bool
};

export default SkipBtn;
