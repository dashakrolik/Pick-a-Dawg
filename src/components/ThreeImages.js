import * as React from 'react'
import { levelUpGetBreeds } from '../actions/levelUpAction'
import {connect} from 'react-redux'

class ThreeImages extends React.Component {


	handleClick = (event) => {
		setTimeout(this.props.nextQuestion, 2000)


		const elValue = event.target.getAttribute('value')
		console.log(this.props,' im the props of the image')

		if(elValue === this.props.correctAnswer){
			console.log('you are right')
			this.props.dispatch({
				type:'CORRECT_ANSWER',
				payload: true
		 })

		 if(this.props.streak !==0 && Number.isInteger(this.props.streak/4)){
			// the number can be adjest on when level up (do the amount of clicks minus 1)
			console.log('i should be shown when streak is 5')
		 this.props.dispatch(levelUpGetBreeds())

		 this.props.dispatch({
			 type:'LEVEL_COUNT',
			 payload: 1
		 })

		 this.props.dispatch({
			 type:'RESET_STREAK',
			 payload: 0
		 })


		}
	 } else {
			console.log('you are wrong')

			this.props.dispatch({
				type:'INCORRECT_ANSWER',
				payload: false
		 })
		}

	}

  render(){
		return(
		<div>
			<ul className="threeImagesContainer">
			<li onClick={this.handleClick}><img value={this.props.image1_breed} src={this.props.image1}/></li>
			<li onClick={this.handleClick}><img value={this.props.image2_breed} src={this.props.image2}/></li>
			<li onClick={this.handleClick}><img value={this.props.image3_breed} src={this.props.image3}/></li>

		</ul>
					<p className="whichImage">Which image is a {this.props.correctAnswer}?</p>
		</div>



		)
	}

}
const mapStateToProps = (state) => {
	console.log(state,'im the state in ThreeImages')
  return {
		answer: state,
		streak: state.performanceBar.streak,
  }
}

export default connect(mapStateToProps)(ThreeImages)
// export default connect(null,{})(ThreeImages)
