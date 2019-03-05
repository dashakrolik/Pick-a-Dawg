import * as React from 'react'
import {connect} from 'react-redux'

class MainView extends React.Component {
    

    

    handleClick = (event) => {
       
        const elValue = event.target.getAttribute('value')
        const imgValue = {
            src: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7265.jpg',
            id : 'breed 1'
        }
        
        if(imgValue.id === elValue){
            
            this.props.dispatch({
                type:'CORRECT_ANSWER',
                payload: true
                }
            )
            
        } else { 
            this.props.dispatch({
                type:'INCORRECT_ANSWER',
                payload: false
                }
            )
      
    } }

    render(){
        return(
            <div className='mainView'>
                <div className='breedImage'>
                    <img value='breed 1' src='https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7265.jpg' alt=''/>
                </div>
                <span>Breed Name</span>
                <span>Hint</span>
            
                <ul>
                    <li value={'breed 1'} key={'breed 1'} onClick={this.handleClick}>Breed 1</li>
                    <li  value={'breed 2'} key= {'breed 2'} onClick={this.handleClick}>Breed 2</li>
                    <li value={'breed 3'} key = {'breed 3'} onClick={this.handleClick}>Breed 3</li>

                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        state
    }
}

export default connect(mapStateToProps)(MainView)
