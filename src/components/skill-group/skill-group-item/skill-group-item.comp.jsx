import React from 'react';
import PropTypes from 'prop-types';

import './skill-group-item.styles.scss';
import GlitchImg from '../../glitch-img/glitch-img.comp';

const SkillGroupItem = ({ index, title, image }) => {
	const delay = index/5;
	const getAnimationStyle = () => {
		return {
			'-webkit-animation': `slide-in-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) ${delay}s both`,
			'animation': `slide-in-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) ${delay}s both`
		}
	};
	return (
		<div className="skill-group-item-comp" style={getAnimationStyle()}>
			<div className="glitch-container rounded">
				<GlitchImg image={image} className="skill-glitch-image" isContain={true} />
			</div>
			<span className="title h5">{title}</span>
		</div>
	);
};

SkillGroupItem.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired
};

export default SkillGroupItem;
