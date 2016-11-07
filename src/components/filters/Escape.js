import React, { PropTypes } from 'react';

const ROLE = 'escape';

const Escape = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Escape
        </div>
    );
}
export default Escape;