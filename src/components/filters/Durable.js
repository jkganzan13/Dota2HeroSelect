import React, { PropTypes } from 'react';

const ROLE = 'durable';

const Durable = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Durable
        </div>
    );
}
export default Durable;