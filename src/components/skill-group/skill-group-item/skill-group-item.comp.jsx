import React from 'react';
import PropTypes from 'prop-types';

import './skill-group-item.styles.scss';

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
			<div className="img-container-container rounded">
				<div className="img-container">
					<div className="skill-img image-effect" style={{backgroundImage: `url(${image})`}}/>
					<div className="skill-img image" style={{backgroundImage: `url(${image})`}}/>
				</div>
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
