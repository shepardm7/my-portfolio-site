import React from 'react';
import PropTypes from 'prop-types';

import Typewriter from 'typewriter-effect';
import './skill-group.styles.scss';
import SkillGroupItem from './skill-group-item/skill-group-item.comp';

import TypeWriter from 'typewriter-effect';

const SkillGroup = ({ title, visible, iconClass, items, onNext, shouldAnimate }) => {
	// const context = React.useContext(Context);
	const refElm = React.useRef(null);
	const [isItemsVisible, setIsItemsVisible] = React.useState(false);
	// const [isComplete, setIsComplete] = React.useState(false);
	React.useEffect(() => {
		setIsItemsVisible(false);
	}, []);

	const typeWriterOnInit = (t) => {
		t.changeDelay(10).changeCursor('_').changeDeleteSpeed(1)
			.callFunction(() => {
				if (refElm.current) {
					refElm.current.scrollIntoView(true);
				}
				// window.scrollTo(0, document.body.scrollHeight);
			}).pauseFor(200)
			.typeString(`<i class="${iconClass}"/> <span class="font-weight-normal">${title}</span>`)
			.changeCursor(' ')
			.callFunction(() => {
				setIsItemsVisible(true);
				setTimeout(() => refElm.current.scrollIntoView(true), 10);
				setTimeout(() => onNext(), 1000);
			}).start();
	};
	const getTitle = () => {
		if (shouldAnimate) {
			if (visible) {
				return <TypeWriter onInit={typeWriterOnInit} />
			}
		} else {
			return <span><i className={iconClass} /><span>{title}</span></span>
		}
	};

	const getItems = () => {
		if (shouldAnimate) {
			if (visible && isItemsVisible) {
				return <div className="skills-container">
					<div className="skills-container-bg bg-secondary"/>
					{items.map((item, index) => <SkillGroupItem index={index + 1} key={item.id} {...item} />)}
				</div>;
			}
		} else {
			return <div className="skills-container">
				<div className="skills-container-bg bg-secondary"/>
				{items.map((item, index) => <SkillGroupItem index={index + 1} key={item.id} {...item} />)}
			</div>;
		}
	};

	return (
		<div className="skill-group-comp">
			<div className="skill-title title h3"> {getTitle()}</div>
			{getItems()}
			<div ref={refElm} />
		</div>
	);
};

SkillGroup.propTypes = {
	title: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	items: PropTypes.arrayOf(Object).isRequired,
	onNext: PropTypes.func.isRequired,
	shouldAnimate: PropTypes.bool.isRequired
};

export default SkillGroup;
