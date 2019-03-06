import { combineReducers } from 'redux'
import DisplayContentReducer from './DisplayContentReducer'
import levelUpReducer from './levelUpReducer'
import answerBoolean from './answerBoolean'
import performanceBar from './performanceBarReducer'

export default combineReducers({
    // reducer,
    levelUpReducer,
    answerBoolean,
    DisplayContentReducer,
    performanceBar
})
