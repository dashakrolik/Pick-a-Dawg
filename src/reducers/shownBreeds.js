const shownBreeds = ( state=['shitzu'], action) => {
    // console.log('state', state, action, 'action');
    
        switch (action.type) {
    
          case 'HINT_SHOWN_FOR_BREED':
        //   console.log('state', state, action, 'action');
            return [
                  ...state,
                  action.payload
            ]
              
                     
            default: 
                return state
        }
    }
    
    export default shownBreeds