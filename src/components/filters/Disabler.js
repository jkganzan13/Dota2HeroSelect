import React, { PropTypes } from 'react';

const ROLE = 'disabler';

const Disabler = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Disabler
        </div>
    );
}
export default Disabler;