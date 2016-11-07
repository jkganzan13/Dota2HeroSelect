import React, { PropTypes } from 'react';

const Hero = ({ hero, isFilterActive }) => {

	return (
		<div className={"hero " + (isFilterActive() && !hero.isActive  ? "disableHero" : "")}>
			<img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name}_vert.jpg`} alt={hero.name} className="grayscale" />
		</div>
	)
};

Hero.propTypes = {
	hero: PropTypes.shape({
		attribute : PropTypes.string.isRequired,
		id : PropTypes.number.isRequired,
		name : PropTypes.string.isRequired,
		atkRange : PropTypes.string.isRequired,
		roles : PropTypes.array.isRequired
	}).isRequired
};

export default Hero;