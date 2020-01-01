import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import GlitchImg from '../glitch-img/glitch-img.comp';

import './work-item.styles.scss';

const WorkItem = ({work, onNext, shouldAnimate}) => {
	const {title, description, visible, image} = work;
	const refElm = React.useRef(null);
	const [isItemsVisible, setIsItemsVisible] = React.useState(false);

	React.useEffect(() => {
		setIsItemsVisible(false);
	}, []);

	const typeWriterOnInit = (t) => {
		t.changeDelay(10).changeCursor('_').changeDeleteSpeed(1)
			.callFunction(() => {
				if (refElm.current) refElm.current.scrollIntoView(true);
			}).pauseFor(200)
			.typeString(`<span>${title}</span>`)
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
				return <Typewriter onInit={typeWriterOnInit}/>
			}
		} else {
			return <span>{title}</span>
		}
	};

	const getContainerContent = () => {
		const containerContent = (
			<div className="work-item-container ">
				<div className="work-item-container-bg bg-secondary"/>
				<div className="work-content flex-row">
					<div className="work-image-container fade-in-img">
						<GlitchImg image={image} className="work-image" isContain={true}/>
					</div>
					<div className="work-item-desc-container fade-in-desc">
						{description}
					</div>
				</div>
			</div>
		);

		if (shouldAnimate) {
			if (visible && isItemsVisible) {
				return containerContent;
			}
		} else {
			return containerContent;
		}
	};

	return (
		<div className="work-item">
			<div className="work-title title h3">{getTitle()}</div>
			{getContainerContent()}
			<div ref={refElm}/>
		</div>
	);
};

WorkItem.propTypes = {
	work: PropTypes.object.isRequired,
	onNext: PropTypes.func.isRequired,
	shouldAnimate: PropTypes.bool.isRequired
};

export default WorkItem;
