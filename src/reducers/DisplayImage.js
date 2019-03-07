import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import MainView from '../components/MainView'

// shuffle array function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class DisplayImage extends Component {
  state = { 
    image: null,
    answerArray: []
  }

  componentDidMount() {
    this.nextQuestion()
  }

  nextQuestion() {
    const shuffledArray = shuffle(this.props.breeds)
    const answerArray = [shuffledArray[0], shuffledArray[1], shuffledArray[2]]
    const shuffleAnswers = shuffle(answerArray)
    this.setState({
      answerArray: shuffleAnswers,
      correctAnswer: shuffledArray[0]
  
    },
    () => {this.getImage(shuffledArray[0])}
    )
  }

getImage = (correctAnswer) => {
    request
      .get(`https://dog.ceo/api/breed/${correctAnswer}/images/random`)
      .then(response => JSON.parse(response.text).message)
      .then(res => this.setState({
        image:res
      }))
      .catch(console.err)
  } 
  
  render() {
    const { breeds } = this.props
    if (breeds) {
      return (
        <div>
          <MainView
            correctAnswer={this.state.correctAnswer}
            image={this.state.image}
            answer1={this.state.answerArray[0]}
            answer2={this.state.answerArray[1]}
            answer3={this.state.answerArray[2]}
        
            nextQuestion={() => this.nextQuestion()}
            />
          </div>
      )
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

