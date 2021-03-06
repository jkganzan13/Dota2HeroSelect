import { combineReducers } from 'redux';
import R from 'ramda';

import { REQUEST_DATA, GET_HEROES } from '../actions';
import { CLEAR_FILTERS, FILTER_HEROES, REMOVE_FILTERS, UPDATE_FILTERS } from '../actions/filters';

function dota2(state = { heroes: [], isLoading: false, activeFilters: [] }, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
			 	isLoading: true
			 });
		case CLEAR_FILTERS:
			return Object.assign({}, state, {
				activeFilters: []
			});
		case FILTER_HEROES:
			return Object.assign({}, state, {
				heroes: action.heroes
			});
		case GET_HEROES:
			 return Object.assign({}, state, {
			 	isLoading: false,
			 	heroes: action.heroes
			 });
		case UPDATE_FILTERS:
			return Object.assign({}, state, {
				activeFilters: filters(state.activeFilters, action),
			});
		case REMOVE_FILTERS:
			return Object.assign({}, state, {
				activeFilters: filters(state.activeFilters, action),
			});
		default:
			return state;
	}
}

function filters(state = [], action) {
	switch(action.type) {
		case UPDATE_FILTERS:
			if (R.contains(action.filterType, state)) {
				return state;
			}
			return [ ...state, action.filterType];
		case REMOVE_FILTERS:
			return R.without([action.filterType], state)
	}
}

const rootReducer = combineReducers({
	dota2
});

export default rootReducer
