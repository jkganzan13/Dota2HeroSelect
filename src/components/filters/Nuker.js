import React, { PropTypes } from 'react';

const ROLE = 'nuker';

const Nuker = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Nuker
        </div>
    );
}
export default Nuker;