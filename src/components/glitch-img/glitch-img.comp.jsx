import React from 'react';
import PropTypes from 'prop-types';

import './glitch-img.styles.scss';

const GlitchImg = ({image, className, isContain, isLogo}) => {

	const commonStyles = {
		backgroundImage: `url(${image})`,
		backgroundSize: isContain ? 'contain' : 'cover'
	};

	return (
		<div className={`glitch-img ${className}`}>
			<div className={`glitch-image glitch-img-effect ${isLogo ? 'logo' : ''}`} style={commonStyles}/>
			<div className="glitch-image glitch-img-image" style={commonStyles}/>
		</div>
	);
};

GlitchImg.defaultProps = {
	isContain: false,
	isLogo: false
};

GlitchImg.propTypes = {
	className: PropTypes.string,
	image: PropTypes.object.isRequired,
	isContain: PropTypes.bool,
	isLogo: PropTypes.bool
};

export default GlitchImg;
