import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

class DisplayImage extends Component {
  state = { image: null }
  //select one of the 3 breeds that are already in the the state.
  //randomly pick one
  //use vncent's Link
  //and it takes the picture of the corresponding breed

//get data from the api
  componentDidMount() {
    const randomNumber = Math.floor(Math.random()*3)
    const randomBreed =  this.props.breeds[randomNumber]

    request
      .get(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
      .then(response => this.updateImage(JSON.parse(response.text).message)) //this should be dispatch
      .catch(console.err)
  }

  updateImage(response) {
    console.log((response), typeof response.message)
    this.props.dispatch({
      type: 'UPDATE_IMAGE',
      payload: response
    })
  }

//2 of the breeds are incorrect, below is what will evaluate that. Answer recieved should be stored in key 'answer' and passed as props
  // evaluateAnswer(answer) {
  //   if (this.props.answer === this.randomBreed){
  //     this.props.dispatch({
  //       type: 'CORRECT_ANSWER_ALERT',
  //       payload: console.log(answer)
  //     })
  //   } else {
  //     this.props.dispatch({
  //       type: 'WRONG_ANSWER_ALERT',
  //       payload: console.log('this is wrong')
  //     })
  //   }
  // }

//SEPARATE INTO TWO COMPONENTS; display the image, and the question - WORK ON LOGIC, RANDOM NUMBER CANNOT BE THE SAME
  render() {
    const { breeds } = this.props

    if (breeds) {
      return (
        <div>
          <img src={this.props.image}></img>
        <h1>{this.props.breeds[0]}</h1>
        <h1>{this.props.breeds[1]}</h1>
        <h1>{this.props.breeds[2]}</h1>
      </div>)
    }
    return (
      null
      )
    }
  }

//ANSWER STATE SHOULD BE UPDATED AS WELL

const mapStateToProps = (state) => {
  return {
    breeds: state.levelUpReducer,
    image: state.DisplayContentReducer
  }
}

export default connect(mapStateToProps)(DisplayImage)
