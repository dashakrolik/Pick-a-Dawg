import { combineReducers } from 'redux'
import reducer from './reducers'
import levelUpReducer from './levelUpReducer'

export default combineReducers({
    reducer,
    levelUpReducer
})