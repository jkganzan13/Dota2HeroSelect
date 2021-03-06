import React, { PropTypes } from 'react';

const ClearFilter = ({ onClickClear }) => {
    return (
        <div className="clearFilter" onClick={onClickClear}>
            <i className="fa fa-times-circle-o fa-lg" aria-hidden="true"></i>
            <br />
            <span className="subRoleTxt activeText">CLEAR</span>
        </div>
    )
};

export default ClearFilter;
