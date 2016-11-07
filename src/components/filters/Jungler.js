import React, { PropTypes } from 'react';

const ROLE = 'jungler';

const Jungler = props => {
    const onClickFilter = () => {

        return props.onClickFilter(ROLE);
    };
    const isActiveFilter = () => (props.isActiveFilter(ROLE)) ? 'activeFilter' : '';

    return (
        <div onClick={onClickFilter} className={"text filters " + isActiveFilter()}>
            Jungler
        </div>
    );
}
export default Jungler;