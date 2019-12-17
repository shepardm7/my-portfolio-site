import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

import './skills.styles.scss';
import Skills, {resetSkillsState} from './skills';

import SkillGroup from '../../components/skill-group/skill-group.comp';
import {Context} from '../../Context';
import {actionType} from '../../ActionTypes';

class SkillsPage extends Component {

	static contextType = Context;
	index = 0;

	state = {
		skills: Skills,
		isCompletelyLoaded: false
	};

	componentDidMount() {
		const {dispatch} = this.context;
		dispatch(actionType.setShowSkip, true);
		dispatch(actionType.setOnSkip, () => {
			this.setState({
				isCompletelyLoaded: true
			});
		});
	}

	componentWillUnmount() {
		resetSkillsState();
		this.context.dispatch(actionType.resetState);
	}

	handleOnNext = () => {
		this.index += 1;
		if (this.index >= this.state.skills.length) {
			this.context.dispatch(actionType.setShowSkip, false);
			this.context.dispatch(actionType.setOnSkip, () => {});
			return;
		}
		this.setState(state => {
			const { skills } = state;
			skills[this.index].visible = true;
			return { skills }
		});
	};

	render() {
		const { skills, isCompletelyLoaded } = this.state;
		return (
			<div className="skills-page ">
				{skills.map(skill => <SkillGroup key={skill.id} shouldAnimate={!isCompletelyLoaded} onNext={this.handleOnNext} items={skill.items} title={skill.title} visible={skill.visible} />)}
			</div>
		);
	}
}

SkillsPage.propTypes = {};

export default SkillsPage;
