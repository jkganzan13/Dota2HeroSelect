import * as _ from 'lodash';
import * as R from 'ramda';

export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const FILTER_HEROES = 'FILTER_HEROES';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';

function filterHeroes(state) {
    let { activeFilters, heroes } = state.dota2;

    const filterAll = hero => {
        let filtersInRoles = () => _.intersection(hero.roles, activeFilters);
        let hasFilters = () => _.difference(activeFilters, filtersInRoles());

        if (R.isEmpty(activeFilters)) {
            hero.isActive = false;
        } else {
            if (R.isEmpty(hasFilters())) hero.isActive = true;
            else if (hasFilters().length == 1) {
                hero.isActive = R.contains(hero.atkRange, hasFilters());
            } else {
                hero.isActive = false;
            }
        }

        return hero;
    };

    const filterHeroesByAttr = heroesByAttr => R.map(filterAll, heroesByAttr);

    return {
        type: FILTER_HEROES,
        heroes: R.map(filterHeroesByAttr, heroes)
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
