import { combineReducers } from 'redux'
import DisplayContentReducer from './DisplayContentReducer'
import performanceBar from './performanceBarReducer'
// import reducer from './reducers'
// import reducer from './reducer'
import levelUpReducer from './levelUpReducer'
import answerBoolean from './answerBoolean'

import showCorrectAnswer from './ShowCorrectAnswerReducer'
import shownBreeds from './shownBreeds'

export default combineReducers({
    // reducer,
    levelUpReducer,
    answerBoolean,
    DisplayContentReducer,
    performanceBar,

    showCorrectAnswer,
    shownBreeds

})
