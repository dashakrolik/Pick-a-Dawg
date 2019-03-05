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
    //const randomBreed =  this.props.breeds[randomNumber] - uncomment this to make it work once breeds are received
    const randomBreed = 'doberman'
    request
      .get(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
      .then(image => this.updateImage(image.message)) //this should be dispatch
      .catch(console.err)
  }

  updateImage(image) {
    console.log('wooot')
    console.log(image)
    this.props.dispatch({
      type: 'UPDATE_IMAGE',
      payload: image
    })
  }

//2 of the breeds are incorrect, below is what will evaluate that. Answer recieved should be stored in key 'answer' and passed as props
  evaluateAnswer(answer) {
    if (this.props.answer === this.randomBreed){
      this.props.dispatch({
        type: 'CORRECT_ANSWER_ALERT',
        payload: console.log(answer)
      })
    } else {
      this.props.dispatch({
        type: 'WRONG_ANSWER_ALERT',
        payload: console.log('this is wrong')
      })
    }
  }

//SEPARATE INTO TWO COMPONENTS; display the image, and the question - WORK ON LOGIC, RANDOM NUMBER CANNOT BE THE SAME
  render() {
    return (
      <div>
      <img src={this.state.image} alt='dog'></img>
      <li src={this.state.breeds[0]}></li>
      <li src={this.state.breeds[1]}></li>
      <li src={this.state.breeds[2]}></li>
      </div>
      )
    }
  }
//ANSWER STATE SHOULD BE UPDATED AS WELL

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    image: state.image
  }
}

export default connect(mapStateToProps)(DisplayImage)
