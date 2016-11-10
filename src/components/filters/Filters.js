import React, { Component, PropTypes } from 'react';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.role = this.props.role.toLowerCase();
        this.onClickFilter = this.onClickFilter.bind(this);
        this.isActiveFilter = this.isActiveFilter.bind(this);
    }

    onClickFilter() {
        this.props.onClickFilter(this.role)
    }

    isActiveFilter() {
        return this.props.isActiveFilter(this.role) ? "activeFilter" : "";
    }

    render() {
        return (
            <div onClick={this.onClickFilter} className={this.props.filterClasses + this.isActiveFilter()}>
                {this.props.role}
            </div>
        )
    }
}

Filters.propTypes = {
    isActiveFilter: PropTypes.func.isRequired,
    onClickFilter: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    filterClasses: PropTypes.string
};

