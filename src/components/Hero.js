import React, { PropTypes } from 'react';

const Hero = ({ heroName }) => {
	return (
		<div className="hero">
			<img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_vert.jpg`} alt={heroName} className="grayscale" />
		</div>
	)
}

Hero.propTypes = {
	heroName: PropTypes.string.isRequired
}

export default Hero;