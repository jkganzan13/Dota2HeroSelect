import fetch from 'isomorphic-fetch';
import * as _ from 'lodash'

export const GET_HEROES = 'GET_HEROES';
export const REQUEST_DATA = 'REQUEST_DATA';

function requestData(){
	return {
		type: REQUEST_DATA
	}
}

function getHeroes(json){
	return {
		type: GET_HEROES,
		heroes: json.heroes
	}
}

export function fetchHeroes(){	
	return dispatch => {
		dispatch(requestData());
		return fetch('http://localhost:4000/dota2/heroes')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => dispatch(getHeroes(json)), 3000)
			});
	}
}
