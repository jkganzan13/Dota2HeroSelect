import React, { PropTypes } from 'react';

const ATK_RANGE = 'ranged';

const Ranged = props => {
    const onClickFilter = () => props.onClickFilter(ATK_RANGE);
    const isActiveFilter = () => (props.isActiveFilter(ATK_RANGE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            RANGED
        </div>
    );
};

export default Ranged;