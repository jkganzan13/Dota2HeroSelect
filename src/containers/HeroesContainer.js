import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import { Col, Row } from 'react-flexbox-grid'

import Hero from '../components/Hero'
import VerticalText from '../components/VerticalText'

export default class HeroesContainer extends Component {
	render() {
		const { attr, heroesByAttributes, isFilterActive } = this.props;

		return (
			<Row className="attributeContainer">
				<Col xs={1}>
						<Col xsOffset={8} xs={4}>
							<VerticalText attribute={attr} />
						</Col>

				</Col>
				<Col xs={11}>
					<Row start="xs">
						<Col xs={12}>
							{_.map(heroesByAttributes, (hero, index) =>
							  <Hero key={index} hero={hero} isFilterActive={isFilterActive} />
							)}
						</Col>
					</Row>
				</Col>
	    	</Row>
		)
	}	
}

HeroesContainer.propTypes = {
	heroesByAttributes: PropTypes.array.isRequired,
	attr: PropTypes.string.isRequired
};