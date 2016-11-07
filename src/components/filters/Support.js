import React, { PropTypes } from 'react';

const ROLE = 'support';

const Support = props => {
    const onClickFilter = () => props.onClickFilter(ROLE);
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            SUPPORT
        </div>
    );
};

export default Support;
