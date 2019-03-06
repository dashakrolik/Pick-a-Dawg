const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
    return action.payload

    case 'CORRECT_ANSWER_ALERT':
    return action.payload

    case 'WRONG_ANSWER_ALERT':
    return console.log('wrong')

    case 'UPDATE_ANSWER':
    return action.payload

  default:
    return state
  }
}
export default reducer

const initialState = []
