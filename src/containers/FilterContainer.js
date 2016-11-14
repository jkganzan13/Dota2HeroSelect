import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';
import * as R from 'ramda';
import { Col, Row } from 'react-flexbox-grid';

import { ATK_RANGE, MAIN_ROLES, SUB_ROLES } from '../constants/Filters';
import ClearFilter from '../components/filters/ClearFilter';
import Filters from '../components/filters/Filters';

import { clearFilters, removeFilter, updateFilter } from '../actions/filters'

export default class FiltersContainer extends Component {
    constructor(props) {
        super(props);
        this.isActiveFilter = this.isActiveFilter.bind(this);
        this.onClickFilter = this.onClickFilter.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
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

    onClickClear() {
        this.props.dispatch(clearFilters());
    }

    toggleAtkRangeFilter (dispatch, filterType) {
        if (filterType == "ranged" && this.isActiveFilter("melee")) {
            dispatch(removeFilter("melee"));
        }
        if (filterType == "melee" && this.isActiveFilter("ranged")) {
            dispatch(removeFilter("ranged"));
        }
    }

    toggleSubRoleRowStyle = () => R.isEmpty(_.intersection(this.props.activeFilters, R.map(R.toLower, SUB_ROLES))) ? { opacity: 0 } : { opacity: 1 };

	render() {
		return (
			<div className="filterContainer">
                <Col xs={12} className="subRoles" style={this.toggleSubRoleRowStyle()}>
                    <Row between="xs">
                        {_.map(SUB_ROLES, (role, index) =>
                            <Filters key={index} filterClasses={"subRoleTxt filters "} isActiveFilter={this.isActiveFilter} onClickFilter={this.onClickFilter} role={role} />
                        )}
                    </Row>
                </Col>
                <Col xs={12} className="mainRoles">
                    <Row between="xs">
                        <Col xs={4}>
                            <Row around="xs">
                                {_.map(MAIN_ROLES, (role, index) =>
                                    <Filters key={index} filterClasses={"text filters "} isActiveFilter={this.isActiveFilter} onClickFilter={this.onClickFilter} role={role} />
                                )}
                            </Row>
                        </Col>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            <Row around="xs">
                                {_.map(ATK_RANGE, (role, index) =>
                                    <Filters key={index} filterClasses={"text filters "} isActiveFilter={this.isActiveFilter} onClickFilter={this.onClickFilter} role={role} />
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {!R.isEmpty(this.props.activeFilters) && <ClearFilter onClickClear={this.onClickClear} />}
			</div>
		);
	}
}

FiltersContainer.propTypes = {
    activeFilters: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};