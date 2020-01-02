import React from 'react';

import './contact-footer.styles.scss';

const ContactFooter = () => {
	return (
		<div className="contact-footer">
			<div className="contact-footer-text">Get in touch...</div>
			<div className="contact-footer-links">
				<a href="https://www.linkedin.com/in/sateek-roy-04245311a/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
					<span className="text-success">Q</span> <i className="fab fa-linkedin" />
				</a>
				<a href="https://github.com/shepardm7" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
					<span className="text-success">W</span> <i className="fab fa-github-square" />
				</a>
				<a href="https://www.facebook.com/sateeksuper" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
					<span className="text-success">E</span> <i className="fab fa-facebook-square" />
				</a>
			</div>
		</div>
	);
};

export default ContactFooter;
