import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import MainView from '../components/MainView'

class DisplayImage extends Component {
  state = { 
    image: null,
  }

  componentDidMount() {
    this.nextQuestion()
  }

  nextQuestion() {
    console.log(this.props.breeds,'im breeds in nextQuestion')
    let lengthBreedsArray = this.props.breeds.length
    const randomNumber1 = Math.floor(Math.random()*lengthBreedsArray)
    const randomNumber2 = Math.floor(Math.random()*lengthBreedsArray)
    const randomNumber3 = Math.floor(Math.random()*lengthBreedsArray)

    const randomBreed1 =  this.props.breeds[randomNumber1]
    // randomBreed1 is the CORRECT ANSWER
    const randomBreed2 =  this.props.breeds[randomNumber2]
    const randomBreed3 =  this.props.breeds[randomNumber3]
    this.setState({
      randomNumber1,
      randomNumber2,
      randomNumber3,
      randomBreed1,
      randomBreed2,
      randomBreed3,
    },
    () => {this.getImage()}
    )
  }

getImage = () => {
    request
      .get(`https://dog.ceo/api/breed/${this.state.randomBreed1}/images/random`)
      .then(response => JSON.parse(response.text).message)
      .then(res => this.setState({
        image:res
      }))
      .catch(console.err)

      
  } 
  
  render() {
    console.log(this.props,'im the props in DisplayImage in render()')
    const { breeds } = this.props

    if (breeds) {
      return (
        <div>
          <MainView
            correctAnswer={this.state.randomBreed1}
            image={this.state.image}
            answer1={breeds[this.state.randomNumber1]}
            answer2={breeds[this.state.randomNumber2]}
            answer3={breeds[this.state.randomNumber3]}
            nextQuestion={() => this.nextQuestion}
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
