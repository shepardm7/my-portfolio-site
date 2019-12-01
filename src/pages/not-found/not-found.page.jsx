import React from 'react';
import Typewriter from 'typewriter-effect';

import './not-found.styles.scss';

const NotFoundPage = () => {
	const onTypewriterInit = typewriter => {
		typewriter.changeDelay(50).changeCursor('_')
			.typeString('<span class="h1 text-danger">Error 404</span><br>')
			.pauseFor(200)
			.typeString('<span class="h3">Page not found!</span>')
			.changeCursor(' ').start();
	};

	return (
		<div className="container not-found-page">
			<div className="typed-text h1">
				<Typewriter onInit={onTypewriterInit} />
			</div>
		</div>
	);
};

export default NotFoundPage;
