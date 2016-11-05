import * as _ from 'lodash';
import * as R from 'ramda';
import fetch from 'isomorphic-fetch';
import heroes from '../api/heroes.json';

export const GET_HEROES = 'GET_HEROES';
export const REQUEST_DATA = 'REQUEST_DATA';

function getHeroes(sortedHeroes){
	return {
		type: GET_HEROES,
		heroes: sortedHeroes
	}
}

function requestData(){
	return {
		type: REQUEST_DATA
	}
}

function sortHeroes(heroes){
	let sortedHeroes = {};
	sortedHeroes.STRENGTH = [];
	sortedHeroes.AGILITY = [];
	sortedHeroes.INTELLIGENCE = [];

	_.forEach(heroes, hero => {
		hero.isActive = false;
		sortedHeroes[hero.attribute].push(hero);
	});
	return sortedHeroes;
}

export function fetchHeroes(){	
	return dispatch => {
		dispatch(requestData());
		setTimeout(() => dispatch(getHeroes(sortHeroes(heroes))), 3000);
	}
}