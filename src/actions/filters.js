import R from 'ramda';

export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const FILTER_HEROES = 'FILTER_HEROES';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';

function _clearFilters() {
    return {
        type: CLEAR_FILTERS,
        activeFilters: []
    }
}

function filterHeroes(state) {
    let { activeFilters, heroes } = state.dota2;

    const filterAll = hero => {
        const isFilterNotInRoles = filterable => !R.contains(filterable, hero.roles);
        const filtersNotInRoles = R.filter(isFilterNotInRoles, activeFilters);

        hero.isActive = (
            !R.isEmpty(activeFilters) &&
            (R.isEmpty(filtersNotInRoles) ||
            (filtersNotInRoles.length == 1 && R.contains(hero.atkRange, filtersNotInRoles)))
        );

        return hero;
    };

    return {
        type: FILTER_HEROES,
        heroes: R.map(filterAll, heroes)
    }
}

function removeFilters(filterType) {
    return {
        type: REMOVE_FILTERS,
        filterType: filterType
    };
}

function updateFilters(filterType) {
    return {
        type: UPDATE_FILTERS,
        filterType: filterType
    };
}

export function removeFilter(filterType) {
    return (dispatch, getState) => {
        dispatch(removeFilters(filterType));
        dispatch(filterHeroes(getState()));
    }
}

export function updateFilter(filterType) {
    return (dispatch, getState) => {
        dispatch(updateFilters(filterType));
        dispatch(filterHeroes(getState()));
    }
}

export function clearFilters() {
    return dispatch => dispatch(_clearFilters());
}
