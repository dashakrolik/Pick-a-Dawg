import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import MainView from './MainView'
import ThreeImages from './ThreeImages'

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
      // originalAnswerArray: answerArray,
      answerArray: shuffleAnswers,
      correctAnswer: shuffledArray[0]
  
    },
    () => {
      this.getImage(shuffledArray[0])
      this.getThreeImages(answerArray)
    }
    )

    this.props.dispatch({ type: 'SHOW_NOTHING' })
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

getThreeImages = (answerArray) => {
   request
     .get(`https://dog.ceo/api/breed/${answerArray[0]}/images/random`)
     .then(response => JSON.parse(response.text).message)
    //  .then(res => console.log(res,'‘im the first image’'))
     .then(res => this.setState({
       image1:res,
       image1_breed:answerArray[0]
     }))
     .then(
       request
       .get(`https://dog.ceo/api/breed/${answerArray[1]}/images/random`)
       .then(response => JSON.parse(response.text).message)
      //  .then(res => console.log(res,'‘im the second image’'))
       .then(res => this.setState({
         image2:res,
         image2_breed:answerArray[1]
       }))
     )
     .then(
       request
       .get(`https://dog.ceo/api/breed/${answerArray[2]}/images/random`)
       .then(response => JSON.parse(response.text).message)
      //  .then(res => console.log(res,'‘im the third image’'))
       .then(res => this.setState({
         image3:res,
         image3_breed:answerArray[2]
       }))
     )
     .catch(console.err)
 }

  render() {
    const { breeds } = this.props
    // console.log(this.props.level, 'im level in display')
    // console.log(this.props.level % 2, 'im that % thing')
    if (breeds) {
      if(this.props.level % 2 === 0){
        return <div>
          
          <MainView
            correctAnswer={this.state.correctAnswer}
            image={this.state.image}

            answer1={this.state.answerArray[0]}
            answer2={this.state.answerArray[1]}
            answer3={this.state.answerArray[2]}
           nextQuestion={() => this.nextQuestion()}
            />
            </div>
      } else {
        return (
        <div>
        
          <ThreeImages
            correctAnswer={this.state.correctAnswer}

            image1={this.state.image1}
            image2={this.state.image2}
            image3={this.state.image3}
            image1_breed={this.state.image1_breed}
            image2_breed={this.state.image2_breed}
            image3_breed={this.state.image3_breed}
            nextQuestion={() => this.nextQuestion()}
          />

          </div>
        )
      }
      
    }
    return (
      null
      )
    }
  }

const mapStateToProps = (state) => {
  console.log(state,' im the state iin displayimage')
  return {
    level: state.performanceBar.level,
    breeds: state.levelUpReducer,
    image: state.DisplayContentReducer
  }
}

export default connect(mapStateToProps)(DisplayImage)
