import React, { PropTypes } from 'react';

const ROLE = 'pusher';

const Pusher = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Pusher
        </div>
    );
}
export default Pusher;