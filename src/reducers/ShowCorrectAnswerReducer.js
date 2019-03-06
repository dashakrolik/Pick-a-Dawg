const ShowCorrectAnswerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SHOW_CORRECT_ANSWER':
    return action.payload

  default:
    return state
  }
}
export default ShowCorrectAnswerReducer

const initialState = []
