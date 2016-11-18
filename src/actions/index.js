import * as _ from 'lodash';
import * as R from 'ramda';
import fetch from 'isomorphic-fetch';
import heroes from '../api/heroes.json';

export const GET_HEROES = 'GET_HEROES';
export const REQUEST_DATA = 'REQUEST_DATA';

function getHeroes(heroes){
	return {
		type: GET_HEROES,
		heroes: heroes
	}
}

function requestData(){
	return {
		type: REQUEST_DATA
	}
}

export function fetchHeroes(){
	return dispatch => {
		dispatch(requestData());
		dispatch(getHeroes(heroes));
	}
}