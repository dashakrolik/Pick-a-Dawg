const ShowCorrectAnswerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SHOW_CORRECT_ANSWER':
    return true

    case 'SHOW_NOTHING':
    return false

  default:
    return state
  }
}
export default ShowCorrectAnswerReducer

const initialState = false
