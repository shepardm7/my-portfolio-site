import React from 'react';
import PropTypes from 'prop-types';

import './work-details.styles.scss';

const WorkDetails = ({work}) => {
	// const refElm = React.useRef(null);
	// const onTypewriterInit = t => {
	// 	t.changeDelay(0).changeCursor('_').changeDeleteSpeed(1)
	// 		.callFunction(() => {
	// 			if (refElm.current) refElm.current.scrollIntoView(true);
	// 		}).pauseFor(200)
	// 		.typeString(`<span class="h3">${work.title}</span><br>`)
	// 		.pauseFor(100)
	// 		.typeString();
	// };

	// const getContainerContent = () => {
	// 	if (work.isCompletelyLoaded) {
	// 		return (
	// 			<React.Fragment>
	//
	// 			</React.Fragment>
	// 		);
	// 	} else {
	// 		return (
	// 			<Typewriter onInit={onTypewriterInit} />
	// 		)
	// 	}
	// };
	return (
		<div className="work-details row" key={work.selectKey}>
			<div className="links-container col col-lg-3 col-12">
				{work.links ?
					work.links.map(link =>
						link.type === 'link' ?
							<a href={link.value} ref={elm => link.ref = elm} target="_blank" rel="noopener noreferrer" className="link btn btn-outline-light">{link.selectKey} <i className={link.iconClass}/></a> :
							<button className="link btn btn-outline-light">{link.selectKey} <i className={link.iconClass}/></button>
					)
					: null}
			</div>
			<div className="details-container fade-in col col-lg-9">
				<div className="title-container h3">{work.title}</div>
				<div className="desc-container">{work.description}</div>
			</div>

		</div>
	)
		;
};

WorkDetails.propTypes = {
	work: PropTypes.object.isRequired,
	// onLoaded: PropType
};

export default WorkDetails;
