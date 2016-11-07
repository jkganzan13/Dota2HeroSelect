import React, { Component, PropTypes } from 'react';
import * as R from 'ramda';

import Carry from '../components/filters/Carry';
import Support from '../components/filters/Support';
import Melee from '../components/filters/Melee';
import Ranged from '../components/filters/Ranged';
import Nuker from '../components/filters/Nuker';
import Disabler from '../components/filters/Disabler';
import Jungler from '../components/filters/Jungler';
import Durable from '../components/filters/Durable';
import Escape from '../components/filters/Escape';
import Pusher from '../components/filters/Pusher';
import Initiator from '../components/filters/Initiator';

import { removeFilter, updateFilter } from '../actions/filters'

export default class FiltersContainer extends Component {
    constructor(props) {
        super(props);
        this.isActiveFilter = this.isActiveFilter.bind(this);
        this.onClickFilter = this.onClickFilter.bind(this);
    }

    isActiveFilter(filterType) {
        return R.contains(filterType, this.props.activeFilters)
    }

    onClickFilter(filterType) {
        const { dispatch, heroes } = this.props;
        if (this.isActiveFilter(filterType))
        {
            return dispatch(removeFilter(filterType))
        }
        this.toggleAtkRangeFilter(dispatch, filterType);
        return dispatch(updateFilter(filterType, heroes));
    }

    toggleAtkRangeFilter (dispatch, filterType) {
        if (filterType == "ranged" && this.isActiveFilter("melee")) {
            dispatch(removeFilter("melee"));
        }
        if (filterType == "melee" && this.isActiveFilter("ranged")) {
            dispatch(removeFilter("ranged"));
        }
    }

	render() {
		return (
			<div className="filterContainer">
                <Nuker onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Disabler onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Jungler onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Durable onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Escape onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Pusher onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Initiator onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />

                <Carry onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Support onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Melee onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
                <Ranged onClickFilter={this.onClickFilter} isActiveFilter={this.isActiveFilter} />
			</div>
		);
	}
}

FiltersContainer.propTypes = {
    activeFilters: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};