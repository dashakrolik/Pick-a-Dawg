const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
    return {...state, ...action.payload}
    
    case 'CORRECT_ANSWER_ALERT':
    return action.payload

    case 'WRONG_ANSWER_ALERT':
    return console.log('wrong')
  default:
    return action.payload
  }
}
export default reducer

const initialState = []
