import React, {Component} from 'react'
import request from 'superagent'


// ACTION: saves dog-breeds in Redux State
export function levelUpSetImages(images) {
	return {
		type: 'LEVEL_UP',
		payload: images
	}
}

// ACTION: includes auto-dispatch to get dog-breeds
// should be called when SCORE is a multiple of 10 
// check if auto-dispatch is excecuted correctly

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





