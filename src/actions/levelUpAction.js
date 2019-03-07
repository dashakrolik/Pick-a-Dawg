import request from 'superagent'
export const LEVEL_UP = 'LEVEL_UP'

export const levelUpSetBreeds = (breeds) => {
	return {
		type: LEVEL_UP,
		payload: breeds
	}
}

export function levelUpGetBreeds() {
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
			.then(res => dispatch(levelUpSetBreeds(res)))

	}
}




