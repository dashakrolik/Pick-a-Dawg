import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView';


class App extends Component {
  render() {
    return (
      <div className="App">
       
       {/* <div className='top-bar'>
            <div className='level-title-score'>
                <span>Level 1</span>
                <span>Title: Learn Dog breeds</span>
                <span>Score 5</span>
            </div>
            <div className='progress-bar'></div>
        </div>

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
            </div> */}

            <MainView />
       
      </div>
    );
  }
}

export default App;
