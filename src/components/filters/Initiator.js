import React, { PropTypes } from 'react';

const ROLE = 'initiator';

const Initiator = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Initiator
        </div>
    );
}
export default Initiator;