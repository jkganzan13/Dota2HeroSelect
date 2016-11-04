import React, { Component, PropTypes } from 'react';
import * as R from 'ramda';

import Carry from '../components/filters/Carry';
import Support from '../components/filters/Support';
import Melee from '../components/filters/Melee';
import Ranged from '../components/filters/Ranged';

import { removeFilter, updateFilter } from '../actions'

export default class FiltersContainer extends Component {
    constructor(props) {
        super(props);
        this.onClickFilter = this.onClickFilter.bind(this);
        this.isActiveFilter = this.isActiveFilter.bind(this);
    }
    onClickFilter(filterType) {
        if (R.contains(filterType, this.props.activeFilters))
        {
            return this.props.dispatch(removeFilter(filterType))
        }
        return this.props.dispatch(updateFilter(filterType));
    }

    isActiveFilter(filterType) {
        return R.contains(filterType, this.props.activeFilters)
    }

	render() {
		return (
			<div className="filterContainer">
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