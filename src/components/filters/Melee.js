import React, { PropTypes } from 'react';

const ATK_RANGE = 'melee';

const Melee = props => {
    const onClickFilter = () => props.onClickFilter(ATK_RANGE);
    const isActiveFilter = () => (props.isActiveFilter(ATK_RANGE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Melee
        </div>
    );
};

export default Melee;