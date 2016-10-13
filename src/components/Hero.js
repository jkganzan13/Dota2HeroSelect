import React, { Component, PropTypes } from 'react';

export default class Hero extends Component {
	render() {
		const { heroName } = this.props;

		return (
			<div className="hero">
				<img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_vert.jpg`} />
			</div>
		)
	}
}