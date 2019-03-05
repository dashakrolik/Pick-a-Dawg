import React, {Component} from 'react'
import request from 'superagent'

// const dogList = 
// 		request
// 			.get('https://dog.ceo/api/breeds/list/all')
// 			.then(res => res.body.message)
// 			.then(res => {
// 				const randomNumber1 = Math.floor(Math.random()*Object.keys(res).length)
// 				const randomNumber2 = Math.floor(Math.random()*Object.keys(res).length)
// 				const randomNumber3 = Math.floor(Math.random()*Object.keys(res).length)
// 				return ([
// 					Object.keys(res)[randomNumber1],
// 					Object.keys(res)[randomNumber2],
// 					Object.keys(res)[randomNumber3]
// 				])
// 			})
// 			.then(res => console.log(res, 'three dogs'))

// REDUCER
import { LEVEL_UP} from './actions/levelUp'

export default (state = [], action = {}) => {

	switch(action.type){
			case 'LEVEL_UP': 
					return [ ...state, { ...action.payload } ]             

			default: 
					return state
	}
}



// this ACTION should be triggered as Initial state && everytime level goes up!			
export function levelUpSetImages(images) {
	return {
		type: 'LEVEL_UP',
		payload: images
	}
}

export function levelUpGetImages() {
	return function (dispatch) {
		request
			.get('https://dog.ceo/api/breeds/list/all')
			.then(res => res.body.message)
			.then(res => {
				const randomNumber1 = Math.floor(Math.random()*Object.keys(res).length)
				const randomNumber2 = Math.floor(Math.random()*Object.keys(res).length)
				const randomNumber3 = Math.floor(Math.random()*Object.keys(res).length)
				return ([
					Object.keys(res)[randomNumber1],
					Object.keys(res)[randomNumber2],
					Object.keys(res)[randomNumber3]
				])
			})
			.then(res => {
				dispatch(levelUpSetImages(res))
			})

	}
}





// example
			export function setAlbums(albums) {
				return {
					type: SET_ALBUMS,
					payload: albums
				}
			}
			
			export function getAlbums() {
				return function (dispatch) {
					request('https://jsonplaceholder.typicode.com/albums')
						.then(response => {
							dispatch(setAlbums(response.body))
						})
				}
			}


export default class FetchDogList extends Component {
	

	render() {
		return (
			<div>{dogList}</div>
		// request
		// .get('https://dog.ceo/api/breeds/list/all')
		// .then(res => res.body.message)
		// .then(res => console.log(res, 'request'))
	)
}
}