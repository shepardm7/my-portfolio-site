import React, {Component, createContext} from 'react';
import {actionType} from './ActionTypes';

const defaultState = {
	showSkip: false,
	onSkip: () => {
	},
	onDocumentKeyUp: (value) => {
	},
	formHasFocus: false
};
export const Context = createContext();

class ContextProvider extends Component {
	constructor(props) {
		super(props);
		defaultState.onSkip = () => {
			this.setState({showSkip: false});
		};
		this.state = defaultState;
	}

	dispatch = (type, value = defaultState) => {
		switch (type) {
			case actionType.onDocumentKeyUp:
				this.setState({onDocumentKeyUp: value});
				break;
			case actionType.setShowSkip:
				this.setState({showSkip: value});
				break;
			case actionType.setOnSkip:
				this.setState({
					onSkip: () => {
						this.setState({showSkip: false});
						value();
					}
				});
				break;
			case actionType.setFormHasFocus:
				this.setState({ formHasFocus: value });
				break;
			default:
				defaultState.onSkip = () => this.setState({showSkip: false});
				this.setState(defaultState);
		}
	};

	render() {
		return (
			<Context.Provider value={{...this.state, dispatch: this.dispatch}}>
				{/* eslint-disable-next-line react/prop-types */}
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default ContextProvider;
