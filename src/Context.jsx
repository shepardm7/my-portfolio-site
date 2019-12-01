import React, {createContext, Component} from 'react';
import {actionType} from './ActionTypes';

const defaultState = {
	something: 1,
	onDocumentKeyUp: (value) => {}
};
export const Context = createContext();
class ContextProvider extends Component {
	state = defaultState;

	dispatch = (type, value) => {
		switch(type) {
			case actionType.onDocumentKeyUp:
				this.setState({ onDocumentKeyUp: value });
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<Context.Provider value={{...this.state, dispatch: this.dispatch }}>
				{/* eslint-disable-next-line react/prop-types */}
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default ContextProvider;
