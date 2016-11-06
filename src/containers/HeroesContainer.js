import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import Hero from '../components/Hero'
import VerticalText from '../components/VerticalText'

export default class HeroesContainer extends Component {
	render() {
		const { attr, heroesByAttributes, isFilterActive } = this.props;

		return (
			<div className="attributeContainer">
				<VerticalText attribute={attr} />
				<div className="heroContainer">
					{_.map(heroesByAttributes, (hero, index) => 
					  <Hero key={index} hero={hero} isFilterActive={isFilterActive} />
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