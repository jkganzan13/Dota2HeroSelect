import React, { PropTypes } from 'react';

const ROLE = 'carry';

const Carry = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            CARRY
        </div>
    );
}
export default Carry;