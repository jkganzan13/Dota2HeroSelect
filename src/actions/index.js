import fetch from 'isomorphic-fetch';
import * as _ from 'lodash'

export const GET_HEROES = 'GET_HEROES';
export const REQUEST_DATA = 'REQUEST_DATA';

function requestData(){
	return {
		type: REQUEST_DATA
	}
}

function getHeroes(sortedHeroes){
	return {
		type: GET_HEROES,
		heroes: sortedHeroes
	}
}

function sortHeroes(heroes){
	let sortedHeroes = {};
	sortedHeroes.STRENGTH = [];
	sortedHeroes.AGILITY = [];
	sortedHeroes.INTELLIGENCE = [];

	_.forEach(heroes, hero => {
		sortedHeroes[hero.attribute].push(hero);
	});
	return sortedHeroes;
}

export function fetchHeroes(){	
	return dispatch => {
		dispatch(requestData());
		return fetch('http://localhost:4000/dota2/heroes')
			.then(response => response.json())
			.then(json => {
				//setTimeout(() => dispatch(getHeroes(json)), 3000)
				dispatch(getHeroes(sortHeroes(json.heroes)));
			});
	}
}
