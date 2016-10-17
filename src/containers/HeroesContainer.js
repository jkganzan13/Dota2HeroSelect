import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import Hero from '../components/Hero'
import VerticalText from '../components/VerticalText'

export default class HeroesContainer extends Component {
	render() {
		const { heroesByAttributes, attr } = this.props;

		return (
			<div className="attributeContainer">
				<VerticalText attribute={attr} />
				<div className="heroContainer">
					{_.map(heroesByAttributes, (hero, index) => 
					  <Hero heroName={ hero.name } key={index} />
					)}
				</div>
	    	</div>
		)
	}	
}

HeroesContainer.propTypes = {
	heroesByAttributes: PropTypes.array.isRequired,
	attr: PropTypes.string.isRequired
}