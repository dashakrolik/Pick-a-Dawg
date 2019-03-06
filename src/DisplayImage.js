import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import MainView from './components/MainView'


// randomNumbers cannot be the same --> fix an if function for this.

const randomNumber1 = Math.floor(Math.random()*3)
const randomNumber2 = Math.floor(Math.random()*3)
const randomNumber3 = Math.floor(Math.random()*3)


class DisplayImage extends Component {
  state = { image: null }

  randomBreed1 =  this.props.breeds[randomNumber1]
  // randomBreed1 is the CORRECT ANSWER
  randomBreed2 =  this.props.breeds[randomNumber2]
  randomBreed3 =  this.props.breeds[randomNumber3]

  setAnswer = () => {

    request
      .get(`https://dog.ceo/api/breed/${this.randomBreed1}/images/random`)
      .then(response => this.updateImage(JSON.parse(response.text).message)) //this should be dispatch
      .catch(console.err)
      
  } 
  

  componentDidMount() {
    this.setAnswer()
 
  }


  
  updateImage(response) {
 
    this.props.dispatch({
      type: 'UPDATE_IMAGE',
      payload: response
    })
  }


  render() {
    const { breeds } = this.props
    
    if (breeds) {
      return (
        <div>
          <MainView 
            correctAnswer={this.randomBreed1}
            image={this.props.image}
            answer1={breeds[randomNumber1]}
            answer2={breeds[randomNumber2]}
            answer3={breeds[randomNumber3]}
            />
          </div>
      )
      //   <div>
      //     <img src={this.props.image}></img>
      //     <h1>{this.randomBreed1}</h1>
      //     <h1 value={breeds[randomNumber1]}>{breeds[randomNumber1]} im breed 1</h1>
      //     <h1 value={breeds[randomNumber2]}>{breeds[randomNumber2]}im breed 2</h1>
      //     <h1 value={breeds[randomNumber3]}>{breeds[randomNumber3]} im breed 3</h1>
      // </div>
    }
    return (
      null
      )
    }
  }



const mapStateToProps = (state) => {
  return {
    breeds: state.levelUpReducer,
    image: state.DisplayContentReducer
  }
}

export default connect(mapStateToProps)(DisplayImage)

