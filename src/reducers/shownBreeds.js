const shownBreeds = ( state=[], action) => {
    // console.log('state', state, action, 'action');
    
        switch (action.type) {
    
          case 'ADD_BREED':
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