import React, {Component} from 'react'
import request from 'superagent'

const dogList = 
		request
			.get('https://dog.ceo/api/breeds/list/all')
			.then(res => res.body.message)
			.then(res => console.log(res, 'doglist length'))
			// .then(Math.floor(Math.random()*dogList.length))
			// .then(res => console.log(res, 'request'))
			

// const randomNumber = Math.floor(Math.random()*)

export default class FetchDogList extends Component {
	
	// componentDidMount() {  
	// 	console.log('first check')


	

	render() {
		console.log(dogList)
		return (

			
		request
		.get('https://dog.ceo/api/breeds/list/all')
		.then(res => res.body.message)
		.then(res => console.log(res, 'request'))
	)}
	}




console.log('hee')