import React, {Component} from 'react';

import './works.styles.scss';
import Works, {resetWorksState} from './works';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';
import WorkItem from '../../components/work-item/work-item.comp';

class WorksPage extends Component {

	static contextType = Context;
	index = 0;

	state = {
		works: Works,
		isCompletelyLoaded: false
	};

	componentDidMount() {
		const { dispatch } = this.context;
		dispatch(actionType.setShowSkip, true);
		dispatch(actionType.setOnSkip, () => {
			this.setState({
				isCompletelyLoaded: true
			});
		});
	}

	componentWillUnmount() {
		resetWorksState();
		this.context.dispatch(actionType.resetState);
	}

	handleOnNext = () => {
		this.index += 1;
		if (this.index >= this.state.works.length) {
			this.context.dispatch(actionType.setShowSkip, false);
			this.context.dispatch(actionType.setOnSkip, () => {});
			return;
		}
		this.setState(state => {
			const { works } = state;
			works[this.index].visible = true;
			return { works }
		});
	};

	render() {
		const { works, isCompletelyLoaded } = this.state;
		return (
			<div className="works-page">
				{
					works.map((work, index) => (
						<WorkItem key={index} work={work} onNext={this.handleOnNext} shouldAnimate={!isCompletelyLoaded} />
					))
				}
			</div>
		);
	}
}

export default WorksPage;
