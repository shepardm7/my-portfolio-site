import React, {Component} from 'react';

import './works.styles.scss';
import Works, {resetWorksState} from './works';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';
import WorkItem from '../../components/work-item/work-item.comp';
import WorkThumbnail from '../../components/work-thumbnail/work-thumbnail';
import WorkDetails from '../../components/work-details/work-details.comp';

class WorksPage extends Component {

	static contextType = Context;
	selectedIndex = 0;

	state = {
		works: Works,
		selectedWorkIndex: null,
		isCompletelyLoaded: false
	};

	componentDidMount() {
		const { dispatch } = this.context;
		// dispatch(actionType.setShowSkip, true);
		dispatch(actionType.onDocumentKeyUp, this.handleOnKey);
		dispatch(actionType.setOnSkip, () => {
			this.setState({
				isCompletelyLoaded: true
			});
		});

		if (!this.state.selectedWorkIndex) {
			setTimeout(() => {
				this.setState({selectedWorkIndex: 0});
			}, 1200);
		}
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

	handleOnSelect = index => {
		if (this.state.selectedWorkIndex === index || this.state.selectedWorkIndex === null) return;
		this.setState({ selectedWorkIndex: index });
	};

	handleOnKey = key => {
		const { works, selectedWorkIndex } = this.state;
		works.forEach((work, index) => {
			if (work.selectKey === key) {
				this.handleOnSelect(index);
			} else {
				works[selectedWorkIndex].links.forEach(link => {
					if (link.selectKey === key) {
						if (link.type === 'link') {
							if (link.ref) {
								if (link.ref) {
									// console.log(link.ref.current);
									// link.ref.current.click();
									window.open(link.value, '_blank');
								}
							}
						}
					}
				})
			}
		});
	};

	render() {
		const { works, selectedWorkIndex, isCompletelyLoaded } = this.state;
		return (
			<div className="works-page">
				{/*{*/}
				{/*	works.map((work, index) => (*/}
				{/*		<WorkItem key={index} work={work} onNext={this.handleOnNext} shouldAnimate={!isCompletelyLoaded} />*/}
				{/*	))*/}
				{/*}*/}

				<div className="work-thumbnails-navbar">
					<div className="work-thumbnails-navbar-bg bg-secondary" />
					{works.map((work, index) => (
						<WorkThumbnail key={index} isSelected={index === selectedWorkIndex} image={work.image} selectKey={work.selectKey} index={index} handleClick={this.handleOnSelect} title={work.title} />
					))}
				</div>
				{/*<WorkDetails work={works[0]} />*/}
				{selectedWorkIndex !== null ? (<WorkDetails work={works[selectedWorkIndex]} />) : null}
			</div>
		);
	}
}

export default WorksPage;
