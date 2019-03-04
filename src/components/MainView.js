import * as React from './react'

export default class MainView extends React.Component {
    handleSubmit = this.handleSubmit.bind(this)

    render(){
        return(
            <div className='mainView'>
                <div className='breedImage'>
                    <img src='https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7265.jpg' alt=''/>
                </div>
                <span>Breed Name</span>
                <span>Hint</span>
                <form>
                    <div className='radio'>
                        <label>
                            <input type='radio' value='Breed 1' checked={true} />
                            Breed 1
                        </label>
                    </div>

                    <div className='radio'>
                        <label>
                            <input type='radio' value='Breed 2' checked={true} />
                            Breed 2
                        </label>
                    </div>  

                    <div className='radio'>
                        <label>
                            <input type='radio' value='Breed 3' checked={true} />
                            Breed 3
                        </label>
                    </div>                    
                    
                </form>
            </div>
        )
    }

}

