import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({ type, label, name, placeholder, rows, focus, onFocus, onBlur, value, onChange }) => {

	if (type === 'textarea' && !rows) rows = 3;

	return (
		<div className="form-input form-group">
			<label className="text-success" htmlFor={`form-input-${name}`}>{label}</label>
			{ type !== 'textarea' ? (
				<input type={type} className="form-control" id={`form-input-${name}`} name={name} placeholder={placeholder} required autoFocus={focus} onFocus={onFocus} onBlur={onBlur} value={value} onChange={onChange}/>
				) : (
				<textarea name={name} id={`form-input-${name}`} rows={rows} className="form-control" placeholder={placeholder} required onFocus={onFocus} onBlur={onBlur} value={value} onChange={onChange} />
			)}
		</div>
	);
};

FormInput.defaultProps = {
	type: 'text',
	focus: false,
	onFocus: () => {},
	onBlur: () => {}
};
FormInput.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	rows: PropTypes.number,
	focus: PropTypes.bool,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func.isRequired
};

export default FormInput;
