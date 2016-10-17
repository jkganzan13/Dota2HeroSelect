import React, { PropTypes } from 'react';

const VerticalText = ({ attribute }) => {
	return (
		<div className="verticalText">
			<div className="rotate">
				<span className="text" > {attribute} </span>
              	<hr className="verticalLine" />
			</div>
      	</div>
	)
}

VerticalText.propTypes = {
	attribute: PropTypes.string.isRequired
}

export default VerticalText;

