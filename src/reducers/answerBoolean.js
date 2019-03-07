const answerBoolean = ( state=null, action) => {
  switch (action.type) {
    case 'CORRECT_ANSWER':
      return {
        state: action.payload
      }
    case 'INCORRECT_ANSWER':
      return {
        state: action.payload
      }  
      default: 
          return state
  }
}
  
export default answerBoolean