import React from 'react';
import PropTypes from 'prop-types';

import './work-thumbnail.styles.scss';
import GlitchImg from '../glitch-img/glitch-img.comp';

const WorkThumbnail = ({ image, title, index, handleClick, selectKey, isSelected }) => {
	return (
		<div className={`work-thumbnail ${isSelected ? 'is-selected' : ''}`} onClick={() => handleClick(index)}>
			<div className="work-image-container rounded">
				<h3 className="select-key bg-dark text-success rounded">{selectKey}.</h3>
				<GlitchImg image={image} className="work-image" isContain={true} />
			</div>
			<div className="work-title-container h4">
				{title}
			</div>
		</div>
	);
};

WorkThumbnail.defaultProps = {
	isSelected: false
};

WorkThumbnail.propTypes = {
	image: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	selectKey: PropTypes.string.isRequired,
	isSelected: PropTypes.bool
};

export default WorkThumbnail;
