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
    //const randomBreed =  this.props.breeds[randomNumber]
    const randomBreed = 'doberman'
    request
      .get(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
      .then(image => this.updateImage(image.message)) //this should be dispatch
      .catch(console.err)
  }

  updateImage(image) {
    console.log('wooot')
    this.props.dispatch({
      type: 'UPDATE_IMAGE',
      payload: image
    })
    console.log(image)
  }

//2 of the breeds are incorrect, below is what will evaluate that. Answer recieved should be stored in key 'answer' and passed as props
  evaluateAnswer(answer) {
    if (this.props.answer === this.randomBreed){
      this.props.dispatch('dispatch action for correct answer')
    } else {
      this.props.dispatch('dispatch action for incorrect answer')
    }
  }

//SEPARATE INTO TWO COMPONENTS; display the image, and the question - WORK ON LOGIC, RANDOM NUMBER CANNOT BE THE SAME
  render() {
    return (
      <img src={this.state.image} alt='dog'></img>
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
