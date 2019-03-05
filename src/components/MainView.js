import * as React from 'react'
import {connect} from 'react-redux'
class MainView extends React.Component {
    

    

    handleClick = (event) => {
       
        const elValue = event.target.getAttribute('value')
        const imgValue = {
            src: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7265.jpg',
            id : 'breed 1'
        }
        let payload
        if(imgValue.id === elValue){
            payload=true
            this.props.dispatch({
                type:'COORRECT_ANSWER',
                payload: payload
                }
            )
            
        } else { 
            this.props.dispatch({
                type:'INCOORRECT_ANSWER',
                payload: payload
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



export default connect()(MainView)
