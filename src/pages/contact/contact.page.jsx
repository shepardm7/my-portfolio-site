import React, {Component} from 'react';
import emailjs from 'emailjs-com';

import './contact.styles.scss';
import FormInput from '../../components/form-input/form-input.comp';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';
// import {ReCAPTCHA} from 'react-google-recaptcha';
import * as Recaptcha from 'react-gcaptcha';
import ContactFooter from '../../components/contact-footer/contact-footer.comp';



class ContactPage extends Component {

	static contextType = Context;

	refSubmitBtn = null;

	links = {
		q: 'https://www.linkedin.com/in/sateek-roy-04245311a/',
		w: 'https://github.com/shepardm7',
		e: 'https://www.facebook.com/sateeksuper'
	};

	state = {
		formHasFocus: false,
		captchaReset: 0,
		from_name: '',
		reply_to: '',
		message_html: ''
	};

	componentDidMount() {
		const { dispatch } = this.context;
		dispatch(actionType.onDocumentKeyUp, this.handleKeyPress)
	}

	componentWillUnmount() {
		this.context.dispatch(actionType.resetState);
	}

	emailIsValid = () => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.reply_to);
	};

	sendEmail = e => {
		e.preventDefault();

		if (!this.emailIsValid()) {
			alert('Please enter a valid email address');
			return;
		}

		emailjs.sendForm('default_service', 'template_p6KDm9eI_clone', e.target, 'user_YOPNLs0ZjQukbeOH011JB')
			.then(result => {
				alert('Your message was sent');
				this.setState(state => ({
					from_name: '',
					reply_to: '',
					message_html: '',
					captchaReset: state.captchaReset+1
				}));
				console.log(result.text);
			}, error => {
				if (error.text !== 'The g-recaptcha-response parameter not found') {
					this.setState(state => ({captchaReset: state.captchaReset + 1}));
				}
				alert('Failed to send message');
				console.log(error);
			});
	};

	handleKeyPress = key => {
		if (this.links[key]) window.open(this.links[key], '_blank');
	};

	handleOnFormKeyDown = e => {
		if (e.ctrlKey && e.keyCode === 13) {
			console.log('OnFormKeyDown', e.target);
			if (this.refSubmitBtn) this.refSubmitBtn.click();
		}
	};

	handleOnFocus = hasFocus => {
		const { dispatch } = this.context;
		dispatch(actionType.setFormHasFocus, hasFocus);
	};

	handleOnValueChange = (key, {target: { value }}) => {
		this.setState({ [key]: value });
	};


	render() {
		const { captchaReset, from_name, reply_to, message_html } = this.state;
		return (
			<div className="contact-page">
				<div className="form-container">
					<form id="contact-form" method="post" onSubmit={this.sendEmail} onKeyDown={this.handleOnFormKeyDown}>
						<FormInput label="Enter name" name="from_name" placeholder="What should I call you?" type="text" focus onFocus={() => this.handleOnFocus(true)} onBlur={() => this.handleOnFocus(false)} value={from_name} onChange={e => this.handleOnValueChange('from_name', e)}/>
						<FormInput label="Enter email" name="reply_to" placeholder="Where should I reach you?" type="email" onFocus={() => this.handleOnFocus(true)} onBlur={() => this.handleOnFocus(false)} value={reply_to} onChange={e => this.handleOnValueChange('reply_to', e)} />
						<FormInput label="Enter message" name="message_html" placeholder="What would you like to say?" type="textarea" rows={5} onFocus={() => this.handleOnFocus(true)} onBlur={() => this.handleOnFocus(false)} value={message_html} onChange={e => this.handleOnValueChange('message_html', e)} />

						<div className="submit-container">
							{/*<div className="g-recaptcha" data-sitekey="6LcmqssUAAAAAJqZegX2leEUaBEd1yBAKummGZcE" data-theme="dark"/>*/}
							{/*<ReCAPTCHA sitekey="6LcmqssUAAAAAJqZegX2leEUaBEd1yBAKummGZcE" theme="dark" />*/}
							<Recaptcha sitekey="6LcmqssUAAAAAJqZegX2leEUaBEd1yBAKummGZcE" theme="dark" clsName="g-recaptcha" reset={captchaReset} />
							<button className="submit-btn btn btn-outline-success" type="submit" ref={elm => this.refSubmitBtn = elm}>Submit</button>
						</div>
					</form>
				</div>
				<ContactFooter links={this.links} />
			</div>
		);
	}
}

export default ContactPage;
