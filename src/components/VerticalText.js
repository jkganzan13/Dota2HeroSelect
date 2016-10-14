import React, { PropTypes } from 'react';

const VerticalText = ({ attribute }) => {
	return (
		<div className="verticalText">
			<span className="rotate">
				{attribute}
              	<hr className="verticalLine" />
			</span>
      	</div>
	)
}

VerticalText.propTypes = {
	attribute: PropTypes.string.isRequired
}

export default VerticalText;

