import { combineReducers } from 'redux';
import { REQUEST_DATA, GET_HEROES } from '../actions';

function dota2(state = { heroes: {}, isLoading: false }, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
			 	isLoading: true
			 }); 
		case GET_HEROES:
			 return Object.assign({}, state, {
			 	isLoading: false,
			 	heroes: action.heroes
			 	// strHeroes: action.heroes.str,
			 	// agiHeroes: action.heroes.agi,
			 	// intHeroes: action.heroes.int
			 });
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	dota2
})

export default rootReducer
