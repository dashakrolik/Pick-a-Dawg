import * as React from 'react'
import {connect} from 'react-redux'

class MainView extends React.Component {
    
 handleClick = (event) => {
       
  const elValue = event.target.getAttribute('value')
  const correctAnswer = this.props.correctAnswer
        
  if(correctAnswer === elValue){
    this.props.dispatch({
      type:'CORRECT_ANSWER',
      payload: true
    }
    )} else { 
        this.props.dispatch({
          type:'INCORRECT_ANSWER',
          payload: false
       }
      )  
		} }
  componentDidMount() {    
    this.addBreed(this.props.correctAnswer)
    this.getHint(this.props.correctAnswer)
  }
 

  getHint = (answerString)=> {

    const hint = `Hint: The name starts with: ${answerString[0]}`

    if(this.props.shownBreedList.indexOf(answerString)) {      
      return hint
    }
    // console.log(this.props.correctAnswer, 'the actual correct answer');
    
    return hint
  }

  addBreed = (breed) => {
      this.props.dispatch({
        type:'ADD_BREED',
        payload:breed
      })
    }
    

	render(){  
    return(
      <div className='mainView'>
        <div className='breedImage'>
          <img src={this.props.image} alt=''/>
          </div>
            <span>Breed Name</span>
            
            <span>  hint: {this.getHint(this.props.correctAnswer)}</span>
            <span ></span>
       
            <ul>
              <li value={this.props.answer1} onClick={this.handleClick}>{this.props.answer1}</li>
              <li value={this.props.answer2} onClick={this.handleClick}>{this.props.answer2}</li>
              <li value={this.props.answer3} onClick={this.handleClick}>{this.props.answer3}</li>
            </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log(state, 'im state of MainView');
    
    return {
        state,
        shownBreedList:state.shownBreeds
    }
}

export default connect(mapStateToProps)(MainView)
