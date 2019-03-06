const answerBoolean = ( state=null, action) => {
  // console.log('state', state, action, 'action');
  
    
      switch (action.type) {
  
        case 'CORRECT_ANSWER':
        // console.log('state', state, action, 'action');
          return {
            state: action.payload
          }
        case 'INCORRECT_ANSWER':
        // console.log('state', state, action, 'action');
          return {
            state: action.payload
          }  
          default: 
              return state
      }
  }
  
  export default answerBoolean