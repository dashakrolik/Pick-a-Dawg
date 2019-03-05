import React, { Component } from 'react';
import DisplayContent from './DisplayContent'
import { connect } from 'react-redux'
import request from 'superagent'

class DisplayContentContainer extends Component {
  state = { image: null }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random()*3)
    const randomBreed =  this.props.breeds[randomNumber]

    request
      .get(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
      .then(image => this.updateImage(image.message)) //this should be dispatch
      .catch(console.err)
  }

  updateImage(image) {
    console.log('wooot')
    console.log(image, 'im the image')
    this.props.dispatch({
      type: 'UPDATE_IMAGE',
      payload: image
    })
  }

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

  render() {
    return <DisplayContent answer={this.props.answer} image={this.props.image} breeds={this.props.breeds}/>
  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    image: state.image,
    answer: state.answer
  }
}

export default connect(mapStateToProps)(DisplayContentContainer)
