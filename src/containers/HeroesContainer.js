import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import { Col, Row } from 'react-flexbox-grid'

import BorderLeft from '../components/BorderLeft'
import Hero from '../components/Hero'
import VerticalText from '../components/VerticalText'

export default class HeroesContainer extends Component {
	render() {
		const { attr, heroesByAttributes, isFilterActive } = this.props;

		return (
			<Row className="attributeContainer">
				<div id="borderLeft"></div>
				<Col xs={1}>
					<Col xsOffset={10} xs={2}>
						<VerticalText attribute={attr} />
					</Col>
				</Col>
				<Col xs={11}>
					<Row start="xs">
						<Col xs={12} className="heroes">
							<BorderLeft />
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
	heroesByAttributes: PropTypes.array,
	attr: PropTypes.string.isRequired
};