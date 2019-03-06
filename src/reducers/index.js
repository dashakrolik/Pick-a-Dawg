import { combineReducers } from 'redux'
import DisplayContentReducer from './DisplayContentReducer'
// import reducer from './reducers'
// import reducer from './reducer'
import levelUpReducer from './levelUpReducer'
import answerBoolean from './answerBoolean'

export default combineReducers({
    // reducer,
    levelUpReducer,
    answerBoolean,
    DisplayContentReducer
})
